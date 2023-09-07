# 23.2.8 Docker Hub:

![Module 23 - Summary Deck_Page_075.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_075.jpg)

You can **share container images** with **others** via many **cloud computing platforms**. In this video, *you’ll learn how to share* **Docker images** via [Docker Hub](https://hub.docker.com/) an **open-source tool** from **Docker**.

You’ll start by **creating a repository** on https://hub.docker.com/, much like you would on **GitHub**. Next, create a **Docker image** and **test it**. After you’ve **confirmed it works**, *publish it to your* **Docker Hub repository**, then **test it again**.

Once you have **created** a **container image**, you'll want to **share that with others**. There's **many places** where you could do so, certainly on `AWS`, on `Google's` Cloud Compute platform, and on `Azure`. But we're **going to do it on** the **open ecosystem**. We're going to do it on [Docker Hub](https://hub.docker.com/).

![Module 23 - Summary Deck_Page_074.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_074.jpg)

We'll start off with the **same application** *that we have used before*. A **Node application** or a **very simple Node application** that simply **sends a date stamp** on request, to **the browser** and **echoes** that on the **server-side**.

![Module 23 - Summary Deck_Page_076.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_076.jpg)

You can see here the **small application**, it has **one single route**, and it **returns** that `date stamp`, and **it's listening** on `port 3000`, as you can see.

![Module 23 - Summary Deck_Page_077.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_077.jpg)

Just as before, we're going to have a **single dependency** for `Express`. And we're going to have a simple `Dockerfile` that **simply defines** and **packages** that **application**.

![Module 23 - Summary Deck_Page_079.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_079.jpg)

![Module 23 - Summary Deck_Page_078.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_078.jpg)

And we're **going to add** to that a `docker-compose.yml` to **simplify our execution**.

![Module 23 - Summary Deck_Page_080.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_080.jpg)

So, as you can see here, I have side-by-side, **an editor** on the left slide, and a **terminal window** on the right-hand side. They're **both opened up** to a **sample directory** on my **desktop**.

* You can see here that **application** now **inside of the editor**, this is my `index.js.`

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(new Date().toLocaleString());
    res.send(new Date().toLocaleString());
});

var port = 3000;
app.listen(port, function () {
    console.log('listening on port: ' + port);
});
```

Then I have my `package.json` with **one dependency** as mentioned in my `Dockerfile`.

```json
{
  "name": "cabinfever",
  "version": "1.0.0",
  "description": "barebones node on docker",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\""
  },
  "author": "paul_estipona@mit.edu",
  "license": "MIT",
  "dependencies": {
    "express": "^4.15.5"
  }
}
```

Then I have my `Dockerfile` and my `docker-compose.yml`.

```dockerfile
FROM node:slim

MAINTAINER paul_estipona <paul_estipona@mit.edu>

WORKDIR /app

# copy code, and install npm dependencies
COPY index.js /app/index.js
COPY package.json /apppackage.json
RUN npm install
EXPOSE 3000
ENTRYPOINT node index.js
```

```yaml
version: "3"

services: 
  node:
    build: .
    ports:
      - "3000:3000"
    command: node index.js
```

Now, once you have all of those pieces, the very next step is to create a repository, much like you do on GitHub. But in this case, we're going to create it in Docker Hub. And you can see there the address. And in this case, for this simple application, I'm calling mine `ablesan/cabinfever`. 

![Module 23 - Summary Deck_Page_081.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_081.jpg)

And I'm going to go ahead and **create a repository**. You **can go ahead** and navigate to it and see it. You can see there **the address**. And look at this **public repository**, just like you would for a **public repository** on **GitHub**.

![Docker_Hub_01.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_01.png)

Now, once you go ahead and do that, the **very next step** is to **create our Docker image**.
* You can see here **the syntax** that I'm going to enter, which is `docker build`
* Then I'm going to **tag that image** `-t`. I'm going to call it `ablesan/cabinfever`.
* And I'm going to enter a `.` there to **simply reference** the `Dockerfile` *within that directory*.

![Module 23 - Summary Deck_Page_082.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_082.jpg)

Now, let's go ahead and **enter that syntax** or that **command**. Here, I'm simply **going to show you** that I have the **same files** as are **listed in the editor**.

![Docker_Hub_02.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_02.png)

And I'm going to go ahead and **paste the command** here. And as you can see there, we have **created our image**.

```shell
docker build -t pestipon/cabinfever .
```

![Docker_Hub_03.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_03.png)

And now, that **we've done that** our **very next step** is to **test our images**. And you can see here **some of the information** that is included on that **command-line instruction**.

* You can see there that **the ports** are **being set** here, `"8080"`, the **very first part** of those **two numbers** is **D1 locally**, that is the **desktop machine** that **you're running on**. That is **the port** for that `"8080"` and `"3000"` would be **the port inside** of **the container**.
* The **next thing** is **the name** that we're going to **give this container**. The **instance of the image** is going to be `"cabinfeverInstance"`, simply to be **explicit** about **what we're doing**.
* And then we're going to be **referencing the image** that we **just created**, which is `cabinfever`.

![Module 23 - Summary Deck_Page_086.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_086.jpg)

So, let's go ahead and `clear` our screen and **enter that command**. 

```shell
docker run -p 8080:3000 --name cabinfeverInstance -t pestipon/cabinfever
```

And as you can **see there** we have the **server up** and **running** and **listening**.

![Docker_Hub_04.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_04.png)

Let's go ahead and **open up a browser** and **take a look** at it. So, as you can see here, I've opened up a skinny browser here on the side. And I'm going to go ahead and access `localhost:3000`. And somehow **I am not reaching it**. And **the reason** for that is that **that is the internal port**, the **port inside** of **the container**.

![Docker_Hub_05.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_05.png)

And I need to enter `8080`. And as you can see there, **I get the response**, the **date stamp**.

![Docker_Hub_06.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_06.png)

And if **I hit it again**, you can see there that **I get time stamp updates** as **time progresses**. Now, you can see here on **the desktop** or on the **server-side** as well, in the **terminal** that I'm getting the **date stamps** as expected.

![Docker_Hub_07.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_07.png)

Now, once we've **tested our image**, our **next step** is to **push into** the **Docker Hub**. And note that **your naming** or my naming here **matches the repository**. So, I'm going to push into `pestipon` then `/cabinfever` 

![Module 23 - Summary Deck_Page_090.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_090.jpg)

So, I'm going to go ahead and **enter that command**, and I'm going to go ahead and **stop the server**.

```shell
CTRL + C
docker push pestipon/cabinfever
```

*And if you have problems* **stopping your server**, you can go ahead and **open up** a **new terminal**, take a look at the **containers** that **you're running**.

* And in this case, you can see there that we have one **up and running**. And so, we can go ahead and **stop that** by the `ID`.
* And you give it a minute, then it will stop. And so, as you can see there now it has stopped.

```shell
docker ps
docker stop <container ID>
```

![Docker_Hub_08.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_08.png)

And I'm going to go ahead and go back. And now, I am going to enter the command to publish. And let's go ahead and run. And as you can see there that is pushing up to our repository or my repository, in this case. If you have any permission issues, you will need to authenticate. In this case, my permissions are leveraging the Docker application that I'm running, so my permissions are already set there.

![Docker_Hub_09.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_09.png)

So, to confirm the publishing, Let's go ahead and navigate to that [repository](https://hub.docker.com/repository/docker/pestipon/cabinfever/general). And as you can see there, we pushed here just a minute ago. And this is a refresh of the container that I just created and pushed up.

![Docker_Hub_10.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_10.png)

Now, once we've done that to test it, we can remove the container, the image, from our machine, or create a new machine, say in the Cloud and install it on that clean machine.

In this case, I'm simply going to go ahead and remove the container in the image that I have here. So, I'm going to start by removing the container using the ID. Then I'm going to take a look at my 'images'. And I'm simply going to remove 'rmi' the one for 'cabinfever'. Let's go ahead and take a look, I'm going to go ahead and 'clear' my screen, and take a look at the images. And we no longer have it.

```shell
docker ps
docker rm 151a8fb3a922
docker images
docker rmi d27f3cb04072
docker images
```

![Docker_Hub_11.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_11.png)

And as you can see there to **pull** the **image again**, we simply enter `docker pull`, and then the **name of the image**, which is **the repository** in the **image**, which in this case it's `pestipon/cabinfever`.

![Module 23 - Summary Deck_Page_097.jpg](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FModule%2023%20-%20Summary%20Deck_Page_097.jpg)

So, let's go ahead and **enter that here**. I'm going to go ahead and `clear` before I do it. And now run that.

```shell
clear
docker pull pestipon/cabinfever
```

And you can see there that **that's being pulled**. And if we took, take a look at our `images`, you can see there that **we have it once again**.

![Docker_Hub_12.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_12.png)

And if you **rerun** the **container application** again.

```shell
docker run -p 8080:3000 --name cabinfeverInstance -t pestipon/cabinfever
```

![Docker_Hub_13.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_13.png)

The **application** still **successfully run**

![Docker_Hub_14.png](..%2FScreen_Shots%2F23.2.8_Docker_Hub%2FDocker_Hub_14.png)

So, that is **the full cycle**. And as you can see, it's **pretty easy** to be **able to create** *once you have your* **application**, and you have **your image**, to be able to **push** on through **Docker Hub**. This is one of the reasons this is such a **convenient way** to **share your code** and let others **reproduce your environment**.