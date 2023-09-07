# Building the Database:

## I. SSH into AWS EC2 Instance Database Server:

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

## II. Setup Docker in AWS EC2 Instance Database Server:

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

## III. Create MongoDB in Docker Container:

**Create** a **mongo database** inside a **docker container** called `afcu-bank`

```shell
sudo docker run -p 27017:27017 --name afcu-bank -d mongo
docker ps
```
We need to **install** the **mongodb package**. We will enter `npm install mongodb`. Note for the exercises to work **mongodb** should be `version 3.6.2`

```shell
npm install mongodb@3.6.2
```

## IV. Useful Commands to Troubleshoot MongoDB:

* [Useful Docker Commands](/Docs/Docker/I.%20Useful%20Docker%20Commands.md)
* [Create and Publish a Docker Image](/Docs/Docker/II.%20Create%20and%20Publish%20a%20Docker%20Image.md)
* [Docker - NodeJS Hello World](/Docs/Docker/III.%20Docker%20-%20NodeJS%20Hello%20World.md)
* [How to install Docker On Ubuntu](/Docs/Docker/IV.%20How%20to%20install%20Docker%20On%20Ubuntu.md)
* [Dockerize Multi-Tier Applications](/Docs/Docker/V.%20Dockerize%20Multi-Tier%20Applications.md)
* [Docker Hub](/Docs/Docker/VI.%20Docker%20Hub.md)
* [Run Docker Container In The Cloud](/Docs/Docker/VII.%20Run%20Docker%20Container%20In%20The%20Cloud.md)