# Capstone Option 1: Full-Stack Banking Application

![iStock-stock market.jpg](Pics%2FiStock-stock%20market.jpg)

## I. Description:

???

## II. Installation Guidelines:

This application is fully built, but To replicate this environment on your own follow the build steps outlined below.

### II.I. Frontend:

For the **front-end authentication** I used Google's **Firebase** Authentication Service. I signed up for a Google Firebase account, and started by creating a project. Once I have the project setup, I then built the authentication service. To use the service I just imported the SDK and authentication library in my main `index.html` file, and copy-pasted my firebase configuration in my JavaScript file.

### II.II. Backend (Web Server):

### II.III. Mongo Database:

To build the mongo database first deploy a Linux EC2 instance in AWS. Once this is deployed follow the next steps to setup the **EC2 instance** & **MongoDB**.

* Install **Node.js** and **npm**, and verify that **npm** is installed
* Install **Docker engine** in EC2 instance
* Start the **Docker service** and **enable** it to start on boot
* **Create** a **mongo database** inside a **docker container** called `afcu-bank`
* Install **mongodb** should be `version 3.6.2` for this exercise to work

To get a more detailed list of steps with commands follow this detailed guide [Building the Database](/Docs/Building_The_Database.md). 

## III. Technology Used:

### III.I. Frontend:

To authenticate with Google Firebase Authentication and then use that authentication to make a call to your API, you would typically use an authentication token (JWT - JSON Web Token). This token is sent to the server on each request, and the server verifies this token using Firebase SDK to ensure the request is coming from an authenticated user.

To build the front-end web page I used HTMl, CSS and JavaScript. To be more specific I built the web components using JavaScript with JavaScript Syntax Extension (JSX) wo embed some 

For **user authentication** this consisted of two parts, the first being the **front-end authentication**, and the second part is the **server routes authentication** in the back-end. The technology I used to build both authentications is **Google's Firebase Authentication Service**.

### III.II. Backend (Web Server):

For the **server routes authentication** in the back-end. The technology I used to build these authentications is **Google's Firebase Authentication Service**.

### III.III. Mongo Database:

For the **data store** I used an image of **Mongo DB** that I deployed in a **Docker Container** hosted in an **AWS EC2 Instance**. I could have made this **more efficient** by just deploying the **container** itself without the **EC2 instance**, but since I did not have enough time to configure this. I went first with what I knew which was to deploy the **mongo database container** in an **AWS EC2 instance**. This guide proved helpful [How to connect to Mongodb on AWS EC2 instance with Robomongo?](https://setu677.medium.com/how-to-connect-to-mongodb-on-aws-ec2-instance-with-robomongo-b2977b8a112f).

## IV. Features:

### Using Studio 3T to Monitor MongoDB Container:

The **mongo database** can be monitored **using a connection** via **port 27017** in **Studio 3T** to monitor the **database contents**.

![Studio 3T.png](Screen_Shots%2FStudio%203T.png)

## V. Future Improvements:

### V.I. Frontend:

I plan to add a birthdate field and account number that is randomly generated.

### V.II. Backend (Web Server):

For the webserver I plan to deploy this next time as a serverless architecture. 

### VIII. Database:

For the database I plan to deploy it straight in AWS ECS (Elastic Container Services) as a container. Since currently the mongo db container I have is hosted within an AWS EC2 Instance, and I would like to eliminate the extra stack there with the EC2 instance.

I also plan to encrypt sensitive information in the database such as passwords, birthdate, and other PII (Personally Identifiable Information).

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