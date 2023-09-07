# Capstone Option 1: Full-Stack Banking Application

![iStock-stock market.jpg](Pics%2FiStock-stock%20market.jpg)

## Description:

???

## Installation Guidelines:

This application is fully built, but To replicate this environment on your own follow the build steps outlined below.

### Mongo Database:

To build the mongo database first deploy a Linux EC2 instance in AWS. Once this is deployed follow the next steps to setup the **EC2 instance** & **MongoDB**.

* Install **Node.js** and **npm**, and verify that **npm** is installed
* Install **Docker engine** in EC2 instance
* Start the **Docker service** and **enable** it to start on boot
* **Create** a **mongo database** inside a **docker container** called `afcu-bank`
* Install **mongodb** should be `version 3.6.2` for this exercise to work

To get a more detailed list of steps with commands follow this detailed guide [Building the Database](/Docs/Building_The_Database.md). 

## Technology Used:

### Mongo Database:

For the **data store** I used an image of **Mongo DB** that I deployed in a **Docker Container** hosted in an **AWS EC2 Instance**. I could have made this **more efficient** by just deploying the **container** itself without the **EC2 instance**, but since I did not have enough time to configure this. I went first with what I knew which was to deploy the **mongo database container** in an **AWS EC2 instance**. This guide proved helpful [How to connect to Mongodb on AWS EC2 instance with Robomongo?](https://setu677.medium.com/how-to-connect-to-mongodb-on-aws-ec2-instance-with-robomongo-b2977b8a112f).

## Features:

### Using Studio 3T to Monitor MongoDB Container:

The **mongo database** can be monitored **using a connection** via **port 27017** in **Studio 3T** to monitor the **database contents**.

![Studio 3T.png](Screen_Shots%2FStudio%203T.png)

## Future Improvements:

For the database I plan to deploy it straight in AWS ECS (Elastic Container Services) as a container. Since currently the mongo db container I have is hosted within an AWS EC2 Instance, and I would like to eliminate the extra stack there with the EC2 instance.

## License:

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