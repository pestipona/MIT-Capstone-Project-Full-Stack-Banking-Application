# 23.2.11 Run Docker Container In The Cloud:

![Module 23 - Summary Deck_Page_075.jpg](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FModule%2023%20-%20Summary%20Deck_Page_075.jpg)

Now, **you’ll run** a **Docker image** in **the cloud**. Use the **Docker image** you **previously published** to [Docker Hub](https://hub.docker.com/) and **deploy it** to a **cloud provider** of your choosing. **This process** is **quite simple** *and allows you to create a* **running instance** of your **application**.  In this video, **Dr. Sanchez will** use a **DigitalOcean Droplet**.

[Heroku Dynos](https://www.heroku.com/dynos) is a **resource** you can use to **deploy** your **Docker container** to a **virtual machine**. You will find **instructions** on **how to deploy** your **application** with **Heroku** in the **Containerize** And **Deploy App assignment** at the **end of this week**. 

Let's run a **Docker container** in **the Cloud**. For this exercise, we're going to be using **the image** we **created previously**, which is `pestipon/cabinfever`. That **image**, if you're curious, you can navigate to your repository, your [private repository](https://hub.docker.com/repository/docker/pestipon/cabinfever/general), which is `pestipon/cabinfever` 

![Run_Docker_Container_In_The_Cloud_01.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_01.png)

We're then **going to navigate** to the **Cloud platform** of [DigitalOcean](https://cloud.digitalocean.com/projects/578fe767-9d33-43a8-a2da-e4acfd5b9827/resources?i=9ef013). We're **going to create** a **new Droplet**, which is a **new VM**.

![Module 23 - Summary Deck_Page_111.jpg](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FModule%2023%20-%20Summary%20Deck_Page_111.jpg)

We're going to use the **Docker image** for that **Droplet**. That is a **machine** that is **pre-configured** *to be able to run* **Docker containers** out of the box.

![Module 23 - Summary Deck_Page_112.jpg](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FModule%2023%20-%20Summary%20Deck_Page_112.jpg)

**Once we have that**, we're going to `ssh` into that **machine**, into the **IP** that we are given from that **new machine**.

![Run_Docker_Container_In_The_Cloud_02.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_02.png)

![Module 23 - Summary Deck_Page_108.jpg](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FModule%2023%20-%20Summary%20Deck_Page_108.jpg)

And once we are **inside of it**, we're going to go ahead and **run that machine**. You can see there the command `docker run`, **the ports** `-p 8080:3000`, **the name** that we're going to **give it locally** `cabinFeverInstance`, and then **the docker image** that we're going to be **referencing**, which once again is `pestipon/cabinfever`.

![Module 23 - Summary Deck_Page_109.jpg](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FModule%2023%20-%20Summary%20Deck_Page_109.jpg)

```shell
doctl compute droplet create --region <REGION_NAME> --image ubuntu-18-04-x64 --size s-1vcpu-1gb <DROPLET-NAME>   # create a droplet
doctl compute droplet list  # list all droplets
doctl compute droplet delete <DROPLET_ID>   # delete a droplet
ssh root@167.71.29.48 # connect to a droplet via SSH
```

![Run_Docker_Container_In_The_Cloud_03.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_03.png)

Now, once we get that up and running, we will go ahead and **confirm access** through the browser. So, let's go ahead and get started. As you can see here,

* I have **logged in to DigitalOcean**, and I'm going to go ahead and **create a new Droplet**. This is DigitalOcean, so the naming convention here is that **new machines** are **like a drop** in the ocean, so hence the name **Droplets**.

* Once this comes up, I'm going to go ahead and move to **Marketplace**. And here I'm going to go ahead and look for that **Docker image** that I mentioned. As you can see here, it comes up right away.

* Then I'm going to go ahead and go mostly with the default. So, a SHARED CPU, the $40 a month, which doesn't really matter because I'm going to run this about five minutes, so it'll be a few cents at most. Ignore the storage. Go ahead, I'm going to go ahead and choose New York, 3, just because that's where I tend to run most of my machines. Go with the default for the rest, all the way down onto the SSH keys, and here I'm going to select one that I have set up before.

* And you can see there that I have selected able. Then I'm going to go ahead and call this machine `docko`.

* And then I'm going to go ahead and create my Droplet.

So, now that that machine has been created, we're going to go ahead and copy the IP. And if this is your first time creating one of these machines that are set up for Docker, you can get more on the documentation here. But now, let's go ahead and move to the terminal window, and access this machine.

* So, as you can see here, I am on a directory where I hold my keys and I'm going to go ahead and enter the command, which is `ssh - i`, then my key, then `root`. If you were going to be working on this machine for more than just testing, you would want to create users and access them that way. But for a small demonstration, this is perfectly fine.

* Then I'm going to go ahead and paste the IP, hit Return. My machine will ask me to confirm the very first time because this is a new destination that we're connecting to. And you can see here some of that information that I mentioned. Now, at this moment, on this machine, we have everything that we need to be able to run that `cabinfever` image.

![Run_Docker_Container_In_The_Cloud_03.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_03.png)

You would need to **login to docker** first. Then, I'm going to go ahead and **enter the command** that I had on the slides, which is the **following docker**, the **port**, the **name** of the **local instance**, plus **the image** that we are **referencing**. So, I'm going to go ahead and **enter that**.

```shell
docker login
docker run -p 8080:3000 --name cabinFeverInstance -t pestipon/cabinfever
```

![Run_Docker_Container_In_The_Cloud_04.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_04.png)

And as you can see there, **that image** is **being pulled**. *And in a few seconds here we should have that* **up and running**. And yes, we do. You can see there that **that is listening** on `port:3000`.

![Run_Docker_Container_In_The_Cloud_05.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_05.png)

Now, **note that internally**, *that is within the* **container** we have `port:3000`, but **externally** *we are exposing* `8080`. So, now I'm going to **open up a browser** and navigate to **that address**. And as you can see here, I have opened up a browser on a blank page. And in **order to access** that machine, we need to **enter the IP** `http://167.71.29.48:8080/`. This is the **IP** that was **given to us** on the **DigitalOcean page**, the one that we used to be able to access the machine through SSH. And then I'm going to go ahead and **enter the port** `8080`. And as you can see there, **I have accessed that machine**, I get the **date stamp**. And if **I reload this**, you can see there that my **time is changing** within **the browser**.

![Run_Docker_Container_In_The_Cloud_08.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_08.png)

And on the **server-side**, on **the machine**, on the server you can see there that those **console writes** are **being displayed** on **the screen** as well.

![Run_Docker_Container_In_The_Cloud_06.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_06.png)

Don't forget to **stop your container**, **delete your container**, and **turn-off your Droplet** (VM).

```shell
docker ps -a   # list all containers
docker stop <CONTAINER_ID>  # stop container
docker rm $(docker ps -a -q)  # delete all containers
```

So, as you can see, once you have **created a machine**, **publishing that machine** or that **container image** onto **Docker Hub** is pretty easy. It just takes a **couple of commands**. And once you have that **container image**, *being able to run it on a* **container platform** or in this case a **VM** that is **pre-packaged** to be able to **run containers** is just a **couple of minutes**.

![Run_Docker_Container_In_The_Cloud_07.png](..%2FScreen_Shots%2F23.2.11_Run_Docker_Container_In_The_Cloud%2FRun_Docker_Container_In_The_Cloud_07.png)

Now, **you can do the same thing** on all of the **other Clouds**, `AWS`, `Azure`, `Google Cloud Compute`, and so on. So, you can see here **the power** of the **portability** of being able to **recreate that environment** easily, **promptly**, simply **within the platform**. So, this is something that you definitely want to try.

* You want to be able to **package your application**,
* **publish it** through **your repository**,
* and then go to **the Cloud site**, and **go ahead and create** your **running instance**.
 
So now, it's your turn.