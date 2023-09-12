# Capstone Option 1: Full-Stack Banking Application

![iStock-stock market.jpg](Pics%2FiStock-stock%20market.jpg)

## I. Description:

???

## II. Installation Guidelines:

This application is fully built, but To replicate this environment on your own follow the build steps outlined below.

### 2.1. Frontend:

For the **front-end authentication** I used Google's **Firebase** Authentication Service. I signed up for a Google Firebase account, and started by creating a project. Once I have the project setup, I then built the authentication service. To use the service I just imported the SDK and authentication library in my main `index.html` file, and copy-pasted my firebase configuration in my JavaScript file.

### 2.2. Backend (Web Server):

### 2.3. Mongo Database:

To build the mongo database first deploy a Linux EC2 instance in AWS. Once this is deployed follow the next steps to setup the **EC2 instance** & **MongoDB**.

* Install **Node.js** and **npm**, and verify that **npm** is installed
* Install **Docker engine** in EC2 instance
* Start the **Docker service** and **enable** it to start on boot
* **Create** a **mongo database** inside a **docker container** called `afcu-bank`
* Install **mongodb** should be `version 3.6.2` for this exercise to work

To get a more detailed list of steps with commands follow this detailed guide [Building the Database](/Docs/Building_The_Database.md). 

## III. Technology Used:

### 3.1. Frontend:

For the **front-end** portion of the **web application** I used the **React Library** to create functional **React Web Components** for the **User Interface (UI)**. These consisted of **decoupled components** each stored in their own **JavaScript** file. These components were written in **JavaScript Syntax Extension (JSX)**, which is using **HTML** tags within **JavaScript version 6** code.

For **styling** the **web application**. I simply used a **styling framework** called **Bootstrap**. The Bootstrap web page has **pre-defined web components** which a developer can quickly and easily use in developing a web page. Such components I used from Bootstrap were the `Navigation Bar`, `Table`, and `Card` components.

For the **front-end authentication** portion of the **web application**. I used **Google's Firebase Authentication Service**. This is a **free-tier service** where the only requirement is to have a **Google account**. This authentication service works by the **client** requesting for a **Jason Web Token (JWT)** from **Google Firebase** and once authenticated by Google, the **JWT** is passed and can be used to **authenticate** to the **back-end API routes** which are verified using **Firebase SDK** to ensure the request is coming from an **authenticated user**.

For **user authentication** this consisted of two parts, the first being the **front-end authentication**, and the second part is the **server routes authentication** in the back-end. The technology I used to build both authentications is **Google's Firebase Authentication Service**.

### 3.2. Backend (Web Server):

For the **server routes authentication** in the back-end. The technology I used to build these authentications is **Google's Firebase Authentication Service**. This was used to secure the **API routes** from **unauthenticated users**.

I also used **Express** to run the server.

### 3.3. Mongo Database:

For the **data store** I used an image of **Mongo DB** that I deployed in a **Docker Container** hosted in an **AWS EC2 Instance**. I could have made this **more efficient** by just deploying the **container** itself without the **EC2 instance**, but since I did not have enough time to configure this. I went first with what I knew which was to deploy the **mongo database container** in an **AWS EC2 instance**. This guide proved helpful [How to connect to Mongodb on AWS EC2 instance with Robomongo?](https://setu677.medium.com/how-to-connect-to-mongodb-on-aws-ec2-instance-with-robomongo-b2977b8a112f).

## IV. Features:

### Using Studio 3T to Monitor MongoDB Container:

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