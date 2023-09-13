# Capstone Option 1: Full-Stack Banking Application

![iStock-stock market.jpg](Pics%2FiStock-stock%20market.jpg)

## I. Description:

???

---------------------------------------------------------------------------

## II. Installation Guidelines:

This is a **full-stack web application**. There are two ways to **install** this **application**, the **first-being** the simplest one which is to install this application on your **localhost** machine, and ignore any instructions regarding the cloud. The **second** is to deploy this application to a **Cloud Service Provider** such as via `AWS`, `Azure`, or `Google Cloud`.

### 2.1. Frontend & Backend (Web Server):

To deploy to an AWS EC2 instance sign up for an AWS account, and navigate to EC2. Create and run an instance preferably the Amazon Linux AMI. Once that is running SSH into the instance and create a project folder, do a git clone to copy all the files or do it localy on your localhost machine. 

One of the requirements of the application is being able to use Google's **Firebase** Authentication Service. Sign up for a Google Firebase account, and start by creating a project. Once the project setup is complete, build the authentication service. To use the service just import the SDK and authentication library in the `index.html` file, and copy-pasted the firebase configuration in each JavaScript file.

Follow the steps in this detailed process [Building the Backend](/Docs/References/Building_The_Backend.md) for more information.

* [Nginx Back-end Server Notes](/Docs/Backend/nginx_backend_server_notes.md)
* [pm2 Back-end Server Notes](/Docs/Backend/pm2_Backend_Server_Notes.md)

### 2.2. Mongo Database:

To build the mongo database first deploy a Linux EC2 instance in AWS. Once this is deployed follow the next steps to setup the **EC2 instance** & **MongoDB**.

* Install **Node.js** and **npm**, and verify that **npm** is installed
* Install **Docker engine** in EC2 instance
* Start the **Docker service** and **enable** it to start on boot
* **Create** a **mongo database** inside a **docker container** called `afcu-bank`
* Install **mongodb** should be `version 3.6.2` for this exercise to work

To get a more detailed list of steps with commands follow this detailed guide [Building the Database](/Docs/References/Building_The_Database.md). 

-------------------------------------------------------------------------------------

## III. Technology Used:

### 3.1. Frontend:

#### 3.1.1. Front-End Library:

For the **front-end** portion of the **web application** I used the **React Library** to create functional **React Web Components** for the **User Interface (UI)**. These consisted of **decoupled components** each stored in their own **JavaScript** file. These components were written in **JavaScript Syntax Extension (JSX)**, which is using **HTML** tags within **JavaScript version 6** code.

#### 3.1.2. UI Styling:

For **styling** the **web application**. I simply used a **styling framework** called **Bootstrap**. The Bootstrap web page has **pre-defined web components** which a developer can quickly and easily use in developing a web page. Such components I used from Bootstrap were the `Navigation Bar`, `Table`, and `Card` components.

#### 3.1.3. Front-end authentication:

For the **front-end authentication** portion of the **web application**. I used **Google's Firebase Authentication Service**. This is a **free-tier service** where the only requirement is to have a **Google account**. This authentication service works by the **client** requesting for a **Jason Web Token (JWT)** from **Google Firebase** and once authenticated by Google, the **JWT** is passed and can be used to **authenticate** to the **back-end API routes** which are verified using **Firebase SDK** to ensure the request is coming from an **authenticated user**.

![Client-Side_Authentication.jpg](Pics%2FClient-Side_Authentication.jpg)

### 3.2. Backend (Web Server):

#### 3.2.1. Runtime Environment:

For my runtime environment I used `Node.js` that allows me to execute **JavaScript code** on the **server-side** which includes handling I/O operations, working with files, and managing network connections.

#### 3.2.2. Web Application Framework:

For my web application framework, I used `Express` to handle my HTTP requests & responses for the backend server, including routing, and middleware integration. 

#### 3.2.3. Package Manager:

Since I'm using Node.js I used `Node Package Manager (NPM)` to install, manage, and update libraries and packages that are required for the web application and it's dependencies.

#### 3.2.4. Server-Side Authentication:

For **securing** the **API routes** in the **back-end**. The technology I used to build these authentication is `Google's Firebase Authentication Service`. This was used to secure the **API routes** from **unauthenticated users** by verifying their JSON web tokens that they pass from the front-end to the backend routes.

![Server-Side_Authentication.jpg](Pics%2FServer-Side_Authentication.jpg)

#### 3.2.5 Reverse Proxy:

For my **reverse proxy** I used `Nginx` to forward requests to my **Node.js app**. This allows users to use the domain name instead of the AWS EC2 Instance IP Address & Port number, it also allows for management of HTTPS certificates more easily in the future.

#### 3.2.6. Process Manager:

For my process manager I used `PM2 (Process Manager 2)` this allows the **Node.js application** to run in the background continuously, enables it to start automatically on reboot, and offers logging and monitoring of the application.

### 3.3. Mongo Database:

#### 3.3.1. Data Store:

For the **data store** I used an image of **Mongo DB** that I deployed in a **Docker Container** hosted in an **AWS EC2 Instance**. I could have made this **more efficient** by just deploying the **container** itself without the **EC2 instance**, but since I did not have enough time to configure this. I went first with what I knew which was to deploy the **mongo database container** in an **AWS EC2 instance**. This guide proved helpful [How to connect to Mongodb on AWS EC2 instance with Robomongo?](https://setu677.medium.com/how-to-connect-to-mongodb-on-aws-ec2-instance-with-robomongo-b2977b8a112f).

![MongoDB.jpg](Pics%2FMongoDB.jpg)

#### 3.3.2. Containerization:

To run my mongodb container, the **docker engine** I used was **Docker**. I installed Docker within my database server to run my mongodb container.

![Docker_Hub.jpg](Pics%2FDocker_Hub.jpg)

### 3.4. Cloud Services:

#### 3.4.1. AWS EC2 Instances:

For both my **web-server** and **database-server** I deployed both to the cloud by hosting them inside **AWS EC2 Instances**. For the **Amazon Machine Image (AMI)** which is basically a virtual machine I chose the free-tier OS which is **Amazon Linux**, and for its compute resources I chose the free tier CPU which is `t2.micro`, and RAM.

#### 3.4.2. AWS Route 53:

I used `Amazon Route 53` for my Domain Name System (DNS) web service and for registering my domain armed-force-bank.com and subdomain www.armed-force-bank.com This cloud service routes incoming web traffic from the public internet to my Hosted Zone. I mapped my registered domain to my web-server's EC2 Instance IP Address, which Nginx will take care of the reverse web proxying.

-------------------------------------------------------------------------------

## IV. Features:

### 4.1. Client-Side & Server Side Authentication:

For **user authentication** this consisted of two parts, the first being the **front-end authentication**, and the second part is the **server routes authentication** in the back-end. This secures both the front-end of the web application as well as access to the API routes in the back-end.

### 4.2. Using Studio 3T to Monitor MongoDB Container:

The **mongo database** can be monitored **using a connection** via **port 27017** in **Studio 3T** to monitor the **database contents**.

![Studio 3T.png](Screen_Shots%2FStudio%203T.png)

## V. Future Improvements:

### 5.1. Frontend:

For the **front-end portion** of the application, there is definitely a lot of room for improvement. Currently, the web page has its core basic function working, but I would like to make the webpage UI more appealing for the users.

Also, more information is needed for each user to identify them which I plan to add such as a birthdate field and account number that is randomly generated.

Aside from additional user information right now there are no **user roles** and pretty much all users can access every api endpoint once they have created their account and successfully authenticated through Google Firebase authentication service. This is not a good security design since some users should only be able to access `"deposit"`, `"withdraw"`, and `"balance"`; whereas for a user admin would be able to access the `"all data"` table. 

### 5.2. Backend (Web Server):

For the **back-end server** I plan to deploy this next time in a different architecture such as a **serverless architecture** in **AWS**. Because right now it's currently deployed as a **Single Page Application (SPA)** stored inside an **AWS S3 Bucket**. 

### 5.3. Database:

For the **database** I plan to deploy it straight in **AWS ECS (Elastic Container Services)** as a **container**. Since currently the **mongo db container** I have is hosted within an **AWS EC2 Instance**, and I would like to eliminate the redundancy there with the **EC2 instance**.

I also plan to **encrypt sensitive information** in the **database** such as passwords, birthdate, and other PII (Personally Identifiable Information).

## VI. License:

The MIT License (MIT)

Copyright (c) 2023 Paul Estipona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.