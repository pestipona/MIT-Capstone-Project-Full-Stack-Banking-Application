# 23.2.6 Dockerize Multi-Tier Applications:

Now you’re going to **Dockerize** a **multi-tier application** with a **node server** and **Mongo database**. `Node` and `MongoDB` will **run within** their **own containers** and you will use **Docker Compose** to **define the application** so **both containers** *run in unison* in an **isolated environment**.

Download the **starter files** from the [Introduction And Instructions page](/Additional%20Resources/Module%2023%20-%20Starter%20Files/Dockerize%20Multi-Tier%20Applications) to follow along

![Module 23 - Summary Deck_Page_051.jpg](..%2FScreen_Shots%2F23.2.6_Dockerize_Multi-Tier_Applications%2FModule%2023%20-%20Summary%20Deck_Page_051.jpg)

Let's **dockerize** a **multi-tier application**. And specifically, in this case, we will be **Dockerizing** an **application** that has `Node` as an **application server**, and a **few routes**, and then a **database** which will be `MongoDB`. **Both of these** will be **running in containers**, and as you will see, once we write our **Docker Compose** file, we will be **defining this application**.

So, let's go ahead and **move to the editor**. As you can see here, I have the **application file** `index.js`. This is a pretty **typical setup** for `Express` and `Mongo`.
* As you can see here, I am **creating an instance** of `express` *which I will use to create my* **application server**, then I have `mongodb`.
* After that, I **define** the **connection string** or what would be the equivalent to the **connection string** in this **environment**. And you can see here that I'm **making a connection** to ` "mongo" `.
* Now, once I do that, I have *defined* a **number of routes**. One just **simply to verify** that the **server** is **up and running**. It returns practically a `Hello World`. 
* And then I have `'/createMongo'` and `'/readMongo'`, `'/createMongo'` is **making writes** to the **database** where `'/readMongo'` is **reading from** the **database**. All of that is **running** on a **listener** on `port:3000`.

```js
var express     = require('express');
var app         = express();
var MongoClient = require('mongodb').MongoClient;

// the name "mongo" comes from the docker link, in the docker-compose.yml
var url = 'mongodb://mongo:27017/dockerdemo';
var db;

MongoClient.connect(url, function (err, database) {
    if(err){ console.log('failed to connect: ' + err); return;}
    db = database;
    console.log("Connected correctly to server!!");
});

app.get('/', function(req, res){
    res.send('Greetings from the server!!');
});

app.get('/createMongo', function(req, res){

    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    var collection = db.collection('customers');
    var doc = {'name':name, 'email':email};
    collection.insert(doc, {w:1}, function(err, result) {
        console.dir(result);
        res.send(result);
    });
});

app.get('/readMongo', function(req, res){

    var results = null;
    var collection = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.dir(docs);
            res.send(docs);
        });
});

app.listen(3000);
```

So, **let's go ahead** and **write** our **Dockerfile**. I'm going to go ahead and **add a file** here, enter `Docker`, that **needs to be uppercase**, `Dockerfile`.

* And inside of it, I'm going to go ahead and **copy and paste** the **contents of the Dockerfile**. This is the same, the **same setup** that we used in a **previous lesson**, where we are **defining** the `MAINTAINER`,
* then the **working directory**, the **index file**, which is the one we **just overviewed**, and it's going to be **copied into** that **working directoy**
* after that, the **package metadata** that **defines** the **dependencies**
* and then ultimately, the `npm install`.

```dockerfile
FROM node:slim

MAINTAINER paul_estipona <paul_estipona@mit.edu>

WORKDIR /app

# copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install
```

Now, **let's go ahead and write** our **Docker Compose**. I'm going to go ahead and **enter that file name** `docker-compose`, then the **extension**, it's going to be `.yml`.

* And inside of this file, we're going to have a **couple of services**. The **very first one** is going to be, I'm going to call `mongo:`.
* And I will use the `image:` of `mongo` and **this will be pulled** from **Docker Hub**.
* Then I'm going to **go ahead and set** my `ports:`. And in this case, I'm going to go ahead and go with the **default ports** for `Mongo`. That is `"27017"`. And I'm going to **use that inside** of the **container** as well as **externally on the host**.
* I'm going to go ahead and enter `restart: always`.
* And then I'm going to go ahead and **move on** to **my other service**, and I will **call my other service** `web:`, in this case, this is going to `build:` from the `Dockerfile` that **we just created**.
* Then I'm going to go ahead and set my `ports:`. I'm going to go ahead and use the **same port inside** of the **container as outside**.
So, `"3000:3000"` was the **listener we set**.
* And I'm going to **use that on the host** as well. This is **going to link** in the `links:` that I'm **going to use here**, in this case, to `mongo`, the **service we just created**.
* And then I'm going to go ahead and enter my `command:`, which is `node index.js`

So, I'm going to go ahead and **save that file** `docker-compose.yml`. I'm going to go ahead and **save** `Dockerfile` as well.

```yaml
services:
    mongo:
      image: mongo
      ports:
        - "27017:27017"
      restart: always
    web:
      build: .
      ports:
        - "3000:3000"
      links:
        - mongo
      command: node index.js
```

I'm going to go ahead and take a look at my files here.

```shell
cd "D:\My Documents\MIT Full Stack Development\Module 23 - Introduction To Docker Containers\Module 23.0 - Introduction To Docker Containers\Self-Study Activities\23.2.6 Dockerize Multi-Tier Applications"

ls -lisa
```

![Dockerize_Multi-Tier_Applications_01.png](..%2FScreen_Shots%2F23.2.6_Dockerize_Multi-Tier_Applications%2FDockerize_Multi-Tier_Applications_01.png)

And then I'm going to go ahead and enter `docker-compose up`. And as you can see there, it's **pulling all of the dependencies**, all of the **image**. And in a moment *if everything goes well*, you should see that it is running **both the database** and then the **application server**.

```shell
docker-compose up -d    # Start the MongoDB container, -d flag runs the containers in the background (detached mode), so you can continue to use the terminal.
docker ps               # Verify MongoDB is running
docker-compose down     # Stopping the MongoDB container and delete all containers
docker-compose stop     # Stopping the MongoDB container without  delete all containers
```