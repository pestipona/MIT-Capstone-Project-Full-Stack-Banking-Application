# II. Create and Publish a Docker Image:

Login to **docker hub** and **create a repository** for **your image** (https://hub.docker.com). Once you are done **creating the image**, you will **push into this repository**. For this example, Dr. Sanchez **created a repository** called `abelsan/cabinfever`.

![Docker_Resources_01.png](..%2F..%2FScreen_Shots%2F23.2.10_Docker_Resources%2FDocker_Resources_01.png)

Create an **application** and a **docker file** for **the application**. Then, create a **docker image** for the **application**. Name your image `YourDockerUsername/YourImageName`. In this example the `username` is `abelsan` and the **image name** is `cabinfever`.

```shell
# Create Docker image
$ docker build -t abelsan/cabinfever.
```

**Test** your **new image**.

```shell
# "-p 8080:3000" sets the container port to 3000 and the host port to 8080
# "--name cabinfeverInstance" sets the container name to cabinfeverInstance
# "-t cabinfever" references the cabinfever image
$ docker run -p 8080:3000 --name cabinfeverInstance -t abelsan/cabinfever
```

After you **confirm** your **application works**, push your **image** to **docker hub**.

```shell
# Note the username/image matches the Docker repository
$ docker push abelsan/cabinfever
```

To **use the image**, enter the **pull command**.

```shell
$ docker pull abelsan/cabinfever
```