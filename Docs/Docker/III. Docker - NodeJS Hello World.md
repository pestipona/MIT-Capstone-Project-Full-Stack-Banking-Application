# III. Docker - NodeJS Hello World:

**Use this document** as a way to **quickly start** any **new project**.

### I. Create a barebones NodeJS application:

Create a directory named `docnode`. **Initialize** your **application** (`npm init`). **Install express** (`npm install express --save`). Your `package.json` file should **look like the following**:

```json
{
"name": "docnode",
"version": "1.0.0",
"description": "barebones node on docker",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "abel@mit.edu",
"license": "MIT",
"dependencies": {
"express": "^4.15.5"
}
}
```

### II. Add a *bare-bones* **express server** and **name your file** `index.js`:

```js
var express = require('express');
var app     = express();

app.get('/', function(req,res){
res.send('Hello World!');
});

var port = 3000;
app.listen(port,function(){
console.log('Listening on port:' + port);
});
```

### III. Create a **Docker file** and name it `Dockerfile`:

```dockerfile
FROM node:slim
MAINTAINER abelsan <abel@mit.edu>
WORKDIR /app
# copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install
```

### IV.Create a **Docker compose** file and name it `docker-compose.yml`:

```yaml
version: "2"
services:
    gin:
    build: .
    ports:
    - "3000:3000"
```

If needed, **copy your code** to the **remote machine**. After this is done, at the **command line**, enter `docker-compose up`:

```shell
docker-compose up
```