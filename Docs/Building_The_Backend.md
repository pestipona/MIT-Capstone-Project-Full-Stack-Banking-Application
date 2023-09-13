# Building the Back-End Web Server:

## I. SSH into AWS EC2 Instance & Install Node.js:

Navigate to the Directory with the Private Key. To connect to your EC2 instance, use the ssh command with the following format:
* **your-private-key.pem:** Replace this with the actual filename of your private key.
* **ec2-user:** The default SSH user for Amazon Linux AMIs. If you're using a different Linux distribution, you might need to use a different username (e.g., ubuntu for Ubuntu AMIs).
* **public-ip-or-dns:** Replace this with the public IP address or DNS name of your EC2 instance.

```shell
cd /path/to/your/private/key
ssh -i "your-private-key.pem" ec2-user@public-ip-or-dns
```

Install Node.js and npm

```shell
sudo yum install nodejs npm
```

After the installation is complete, you can verify that npm is installed by checking its version

```shell
node -v
npm -v
```

## II. Copy code on your EC2 instance and install dependencies:

To **transfer files** from a **local host** to a **remote server** using the `scp` command and a **private key** for **authentication**, you'd use the `-i` option followed by the **path** to your **private key**. The general syntax for this is:

```shell
scp -r -i /path/to/private_key /path/to/local/directory/ ec2-user@remote_server:/path/on/remote/server/
```

You can now **install** your **node dependencies** by navigating to your **application's directory** on the **EC2 instance** and running the following command. The `package.json` file will automatically download and install the **required dependencies**.

```shell
cd <project directory>
npm install
```

### Start server to run forever:

Now, to keep our server running forever (even when we are not SSH logged in to the instance) use a process manager like `pm2`, `forever`, or `systemd` to start and manage your **Node.js application** as a **background service**. In this case we will use `pm2`.These tools can ensure that your **application restarts** if the **server reboots** or if it **crashes**.

Install pm2 by running the following command

```shell
npm install -g pm2
```

Set up `pm2` to start the **server automatically** on **server restart**.

```shell
pm2 start app.js
pm2 save
pm2 startup
```

Note that after running the pm2 startup command we get a command starting with “sudo”.

Copy that command from sudo till the end of the next line and paste it in the terminal and press enter.

Now your node server is running and is set to start automatically whenever you restart the EC2 instance.

## III. Register Domain & Setup to Point to IP Address:

Setting up your registered domain in AWS Route 53 to point to your EC2 instance IP address involves several steps. Here's a guide on how to do that:

1. **Log into the AWS Management Console**:

2. **Navigate to Route 53**:
   Open the "Services" dropdown and select "Route 53".

3. **Create a Hosted Zone**:
    - In the Route 53 dashboard, click on "Hosted zones" on the left panel.
    - Click "Create Hosted Zone".
    - Enter your domain name (e.g., `example.com`) and leave the type as "Public".
    - Click "Create".

4. **Update your Domain's Name Servers**:
    - Once your hosted zone is created, you will see four name servers in the "NS" record. You need to update your domain registrar's settings with these name servers. This process varies depending on your registrar, so you may need to refer to their documentation or support for specific instructions.

5. **Point Domain to EC2 IP Address**:
    - Inside your new hosted zone in Route 53, click "Create Record".
    - Choose "Simple routing" and click "Next".
    - Click "Define simple record".
    - In the pop-up:
        - Leave the record name empty if you want to point the root domain (`example.com`) to your EC2 instance. If you want to point a subdomain (e.g., `www.example.com`), enter the subdomain (`www` in this case).
        - For "Value/Route traffic to", select "IP address or another value depending on the record type".
        - Enter the public IP address of your EC2 instance.
        - Choose "A – IPv4 address" as the record type.
        - Click "Define simple record".
    - Click "Create records".

6. **(Optional) Use an Elastic IP**:
    - If you're pointing your domain directly to an EC2 instance IP, be aware that this IP can change if the instance is stopped and started again. To prevent this, use an Elastic IP which is a static, public IPv4 address.
    - You can allocate an Elastic IP in the EC2 dashboard and associate it with your instance. If you do this after setting up Route 53, make sure to update the IP address in your Route 53 record to match the new Elastic IP.

7. **Wait**:
    - DNS changes can take some time to propagate across the internet. This can range from a few minutes to 48 hours, but it typically doesn't take that long.

After completing these steps and waiting a bit for DNS propagation, you should be able to access your EC2 instance by visiting your domain in a web browser.

## IV. Some Useful Commands:

To terminate a process managed by PM2 using its PID (Process ID), you would first need to find the id (not the PID) of the process in the PM2 list and then stop it using `pm2 stop`.

Here's a step-by-step guide:

1. **List all processes managed by PM2**:

   Run the following command:
   ```bash
   pm2 list
   ```

   This will give you a list of all applications running under PM2. Each line will display info about a single application, including its `id`, `name`, `status`, and other details.

2. **Identify the PM2 id**:

   Look for the process you want to terminate. Note the `id` column (it's typically a number). Do not confuse this with the `pid` column.

3. **Stop the process**:

   Use the `pm2 stop` command followed by the `id`:
   ```bash
   pm2 stop [id]
   ```

   Replace `[id]` with the actual id you noted in the previous step.

Example:
```bash
pm2 stop 0
```

This will stop the application associated with id `0`.

If you want to remove the process from the PM2 list entirely, you can use the `pm2 delete` command, similar to the `stop` command:
```bash
pm2 delete [id]
```

Remember, you're using the PM2 id, not the PID, to perform these actions.

### How to check if my node.js application is actually running when I used pm2?

You can use the `pm2` command-line tool to verify the status of your Node.js application and check if it's running. Here's how:

1. **List all processes managed by PM2**:

   Run the following command:
   ```bash
   pm2 list
   ```

   This command displays a table with all the processes managed by PM2. The table includes the `id`, `name`, `status`, and other details for each process.

2. **Check the Status**:

   Look for the row corresponding to your Node.js application. Specifically, check the `status` column. If your application is running, it will show as `online`. If it's stopped, it will show as `stopped`.

3. **Additional Details with `pm2 show`**:

   For more detailed information about a specific process, you can use the `pm2 show` command followed by the application name or id:

   ```bash
   pm2 show [app-name or id]
   ```

   This command provides a detailed overview of the application, including logs, restart counts, uptime, and other metrics.

4. **Check the Logs**:

   If you want to view the logs for your application to ensure it's operating correctly, use the `pm2 logs` command:

   ```bash
   pm2 logs [app-name or id]
   ```

   This command will show the combined logs for all managed processes if you don't specify an app name or id. If you do specify one, it will show the logs only for that specific application.

By following these steps, you can verify that your Node.js application is running and also gather more information about its operations when managed by `pm2`.

### Other useful commands:

```shell
pm2 list
pm2 start <ID>
pm2 stop <ID>
pm2 show <ID>
pm2 restart <ID>
pm2 logs <ID>
lsof -i :3000
kill -9 <PID>
```