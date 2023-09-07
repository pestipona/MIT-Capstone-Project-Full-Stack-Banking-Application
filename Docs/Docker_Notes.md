## SSH into AWS EC2 Instance Database Server

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

## Setup Docker in AWS EC2 Instance Database Server:

Install Docker in EC2 instance

```shell
sudo yum install docker
```

Once Docker is installed, start the Docker service and enable it to start on boot

```shell
sudo systemctl start docker
sudo systemctl enable docker
```

By default, the docker command can only be run by users with sudo privileges. If you want to run Docker commands without using sudo, you can add your user to the docker group:

```shell
sudo usermod -aG docker $USER
```

Verify the Docker version to confirm that it has been successfully installed

```shell
docker --version
```

## Docker Commands:

**Create** a **mongo database** inside a **docker container** called `afcu-bank`

```shell
cd ""

docker run -p 27017:27017 --name afcu-bank -d mongo
docker ps
```
We need to **install** the **mongodb package**. We will enter `npm install mongodb`. Note for the exercises to work **mongodb** should be `version 3.6.2`

```shell
npm install mongodb@3.6.2
```

To **build** a **docker image**, the `-t` is to **specify** your **image name**.

```shell
docker build -t <your image name>
```

To **list** all **containers** currently **running**, the `-a` is for **all containers**

```shell
docker ps -a
```

To **list** all **docker images**
```shell
docker images -a
```

To **stop** a **container**
```shell
docker stop <container id>
```

To **open a shell** in a running **container**
```shell
sudo docker exec -i -t <container id or name> bash
```

To **delete** all **docker containers**, must be **run first** before deleting a **docker image**
```shell
docker rm $(docker ps -a -q)
```

To **delete** all **docker images**
```shell
docker rmi $(docker images -q)
```

To **force delete** all **docker images**
```shell
docker rmi -f $(docker images -q)
```




The code snippet you provided is using jQuery to initialize a Bootstrap table using the `bootstrapTable` method.

`$(document).ready(function() { ... });` is a jQuery function that waits for the document to be fully loaded before executing the code inside the function. It ensures that the JavaScript code runs after the HTML document is ready and all elements are available for manipulation.

Inside the function, the code selects all `<table>` elements on the page using the `$('table')` selector. It then calls the `bootstrapTable` method on the selected table(s) and passes an object as the argument. The object has a `data` property that contains the data to be displayed in the table.

In your code, `mydata` is likely a variable that holds the data you want to populate in the table. It is being passed as the value of the `data` property. You should replace `mydata` with the actual variable or JSON data that you want to display in the table.

Overall, this code initializes the Bootstrap table plugin on the selected table(s) and populates it with the specified data.

```jquery-css
$(document).ready(function (){
    // Use the given data to create the table and display it
    $('table').bootstrapTable({data: mydata});
});
```