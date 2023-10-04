# Capstone Project - Full-Stack Banking Application:

![iStock-stock market.jpg](Screen_Shots%2FiStock-stock%20market.jpg)

## I. Description:

This project is a **full-stack web application**. It uses some of the **latest technologies** in **web application development**, **cloud computing**, **containerization**, and **networking**. To see a list of all technologies used refer to the **technology section** of this ReadMe.

This **application** is a simple demonstration of a **web based commercial banking application** where a user can create their account, authenticate, perform basic banking transactions (such as deposit, withdraw, and balance check), and view their information.

It should be noted that this application is **not meant** to be for **commercial use**, it is simply used to **demonstrate** the **concept** of how a **full-stack application** works, and how the **different parts** of the **stack** work together from the **front-end**, to the **back-end server**, to the **data store**, and back. It also shows how different technologies work together.

---------------------------------------------------------------------------

## II. Installation Guidelines:

There are two ways to **install** this **application**, the **first-being** the simplest one which is to install this application on your **localhost** machine, and ignore any instructions regarding the cloud. The **second** is to deploy this application to a **Cloud Service Provider** such as via `AWS`, `Azure`, or `Google Cloud`.

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

## III. Technologies Used:

### 3.1. Frontend:

#### 3.1.1. Front-End Library:

For the **front-end** portion of the **web application** I used the **React Library** to create functional **React Web Components** for the **User Interface (UI)**. These consisted of **decoupled components** each stored in their own **JavaScript** file. These components were written in **JavaScript Syntax Extension (JSX)**, which is using **HTML** tags within **JavaScript version 6** code.

#### 3.1.2. UI Styling:

For **styling** the **web application**. I simply used a **styling framework** called **Bootstrap**. The Bootstrap web page has **pre-defined web components** which a developer can quickly and easily use in developing a web page. Such components I used from Bootstrap were the `Navigation Bar`, `Table`, and `Card` components.

#### 3.1.3. Front-end authentication:

For the **front-end authentication** portion of the **web application**. I used **Google's Firebase Authentication Service**. This is a **free-tier service** where the only requirement is to have a **Google account**. This authentication service works by the **client** requesting for a **Jason Web Token (JWT)** from **Google Firebase** and once authenticated by Google, the **JWT** is passed and can be used to **authenticate** to the **back-end API routes** which are verified using **Firebase SDK** to ensure the request is coming from an **authenticated user**.

![Client-Side_Authentication.jpg](Screen_Shots%2FClient-Side_Authentication.jpg)

### 3.2. Backend (Web Server):

#### 3.2.1. Runtime Environment:

For my runtime environment I used `Node.js` that allows me to execute **JavaScript code** on the **server-side** which includes handling I/O operations, working with files, and managing network connections.

#### 3.2.2. Web Application Framework:

For my web application framework, I used `Express` to handle my HTTP requests & responses for the backend server, including routing, and middleware integration. 

#### 3.2.3. Package Manager:

Since I'm using Node.js I used `Node Package Manager (NPM)` to install, manage, and update libraries and packages that are required for the web application and it's dependencies.

#### 3.2.4. Server-Side Authentication:

For **securing** the **API routes** in the **back-end**. The technology I used to build these authentication is `Google's Firebase Authentication Service`. This was used to secure the **API routes** from **unauthenticated users** by verifying their JSON web tokens that they pass from the front-end to the backend routes.

![Server-Side_Authentication.jpg](Screen_Shots%2FServer-Side_Authentication.jpg)

#### 3.2.5 Reverse Proxy:

For my **reverse proxy** I used `Nginx` to forward requests to my **Node.js app**. This allows users to use the domain name instead of the AWS EC2 Instance IP Address & Port number, it also allows for management of HTTPS certificates more easily in the future.

#### 3.2.6. Process Manager:

For my process manager I used `PM2 (Process Manager 2)` this allows the **Node.js application** to run in the background continuously, enables it to start automatically on reboot, and offers logging and monitoring of the application.

### 3.3. Mongo Database:

#### 3.3.1. Data Store:

For the **data store** I used an image of **Mongo DB** that I deployed in a **Docker Container** hosted in an **AWS EC2 Instance**. I could have made this **more efficient** by just deploying the **container** itself without the **EC2 instance**, but since I did not have enough time to configure this. I went first with what I knew which was to deploy the **mongo database container** in an **AWS EC2 instance**. This guide proved helpful [How to connect to Mongodb on AWS EC2 instance with Robomongo?](https://setu677.medium.com/how-to-connect-to-mongodb-on-aws-ec2-instance-with-robomongo-b2977b8a112f).

![MongoDB.jpg](Screen_Shots%2FMongoDB.jpg)

#### 3.3.2. Containerization:

To run my mongodb container, the **docker engine** I used was **Docker**. I installed Docker within my database server to run my mongodb container.

![Docker_Hub.jpg](Screen_Shots%2FDocker_Hub.jpg)

### 3.4. Cloud Services:

#### 3.4.1. AWS EC2 Instances:

For both my **web-server** and **database-server** I deployed both to the cloud by hosting them inside **AWS EC2 Instances**. For the **Amazon Machine Image (AMI)** which is basically a virtual machine I chose the free-tier OS which is **Amazon Linux**, and for its compute resources I chose the free tier CPU which is `t2.micro`, and RAM.

![AWS_EC2.png](Screen_Shots%2FAWS_EC2.png)

#### 3.4.2. AWS Route 53:

I used `Amazon Route 53` for my Domain Name System (DNS) web service and for registering my domain armed-force-bank.com and subdomain www.armed-force-bank.com This cloud service routes incoming web traffic from the public internet to my Hosted Zone. I mapped my registered domain to my web-server's EC2 Instance IP Address, which Nginx will take care of the reverse web proxying.

![Route 53.png](Screen_Shots%2FRoute%2053.png)

-------------------------------------------------------------------------------

## IV. How to Use the Application:

Once you are able to deploy your application either in the cloud or locally. Open up a web browser of your choice and paste in the following URLs in the address bar.

* http://www.armed-forces-bank.com/ (deployed in the cloud)
* http://localhost:3000/ (deployed in the localhost)

The following page displays which is the **home page**, notice that the `Create Account` & `Login` Menu items (for existing users) in the navigation bar are only available.

![Home_Page.png](Screen_Shots%2FHome_Page.png)

### 4.1. Creating an Account:

If you don't have an existing account click on the **Create Account** menu item in the navigation bar to create a new one. Enter the required fields which are `Name`, `email`, `password`, & `starting balance`. Once done click on the `Create Account` button.

![Create_Account.png](Screen_Shots%2FCreate_Account.png)

If the Create Account process was successful a **Success Message** will be displayed.

![Create_Account_Success.png](Screen_Shots%2FCreate_Account_Success.png)

### 4.2. Logging into an Account:

Once you acknowledge the **Success Message** you would then have to **login** using the **credentials** you provided in the **Crate Account step** and click on the `Login` button.

![Login.png](Screen_Shots%2FLogin.png)

If the **authentication process** via **Google Firebase** was successful a **Success Message** will be displayed.

![Login_Success.png](Screen_Shots%2FLogin_Success.png)

After you are able to **successfully login**, you will notice **more options** are now **available** in the **navigation bar** such as `Deposit`, `Withdraw`, `Balance`, and `All Data`.

### 4.3. Making a Deposit:

To make a **Deposit** simply click on the `Deposit` menu button and provide the `email address` of the account and the `deposit amount`.

![Deposit.png](Screen_Shots%2FDeposit.png)

If the **deposit process** was successful a **Success Message** will be displayed.

![Deposit_Success.png](Screen_Shots%2FDeposit_Success.png)

### 4.4. Check Balance:

To **check you balance** click on the `Balance` button on the **Navigation Bar**. Provide the `email address` of the account and click on the `Check Balance` button.

![Check_Balance.png](Screen_Shots%2FCheck_Balance.png)

If the **check balance process** was successful your **balance** will be displayed.

![Check_Balance_Success.png](Screen_Shots%2FCheck_Balance_Success.png)

### 4.4. Make a Withdrawal:

To make a **Withdrawal** simply click on the `Withdraw` menu button and provide the `email address` of the account and the `withdraw amount`.

![Withdraw.png](Screen_Shots%2FWithdraw.png)

If the **withdrawal process** was successful a **Success Message** will be displayed.

![Withdraw_Success.png](Screen_Shots%2FWithdraw_Success.png)

### 4.5. Check All Data:

This step is **usually reserved** for **users** with **higher admin privileges** which is the `All Data` menu option. However, **user roles** have not yet been implemented in the **web application** as is part the application's **future improvements**. 

Click on the `All Data` Button and this will display the documents that were pulled from the MongoDB in the database server, and formatted to be displayed in a Boostrap Table.

![All_Data.png](Screen_Shots%2FAll_Data.png)

### 4.6. Logout:

Once you are done with your session, simple click on the `Logout` Button on the top-left corner of the **navigation bar**. A Log Out button will appear to confirm the user's intention to logout.

![Logout.png](Screen_Shots%2FLogout.png)

Once you are successfully logged out, a success message appears. This fully de-authenticates the user from the Google Firebase authentication, notice also the restricted view of the navigation bar which is back to Create Account and Login.

![Logout_Success.png](Screen_Shots%2FLogout_Success.png)

-------------------------------------------------------------------------------

## V. Features:

### 5.1. Client-Side & Server Side Authentication:

For **user authentication** this consisted of two parts, the first being the **front-end authentication**, and the second part is the **server routes authentication** in the back-end. This secures both the front-end of the web application as well as access to the API routes in the back-end.

### 5.2. Using Studio 3T to Monitor MongoDB Container:

The **mongo database** can be monitored **using a connection** via **port 27017** in **Studio 3T** to monitor the **database contents**.

![Studio 3T.png](Screen_Shots%2FStudio%203T.png)

## VI Future Improvements:

### 6.1. Frontend:

For the **front-end portion** of the application, there is definitely a lot of room for improvement. Currently, the web page has its core basic function working, but I would like to make the webpage UI more appealing for the users.

Also, **more user information** is needed for each user to identify them which I plan to add such as a **birthdate** field and **account number** that is randomly generated. **Input Validation** is also a must which has not been fully implemented in the **web forms**.

Aside from additional user information right now there are no **user roles** and pretty much all users can access every api endpoint once they have created their account and successfully authenticated through Google Firebase authentication service. This is not a good security design since some users should only be able to access `"deposit"`, `"withdraw"`, and `"balance"`; whereas for a user admin would be able to access the `"all data"` table. 

### 6.2. Backend (Web Server):

For the **back-end server** I plan to deploy this next time in a different architecture such as a **serverless architecture** in **AWS**. Because right now it's currently deployed as a **Single Page Application (SPA)** stored inside an **AWS EC2 instance**. 

### 6.3. Database:

For the **database** I plan to deploy it straight in **AWS ECS (Elastic Container Services)** as a **container**. Since currently the **mongo db container** I have is hosted within an **AWS EC2 Instance**, and I would like to eliminate the redundancy there with the **EC2 instance**.

I also plan to **encrypt sensitive information** in the **database** such as passwords, birthdate, and other PII (Personally Identifiable Information).

## VII. License:

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

![MIT Emeritus.jpg](Screen_Shots%2FMIT%20Emeritus.jpg)
