# IV. How to install Docker On Ubuntu:

Adapted from [Digital Ocean Guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04).

## Step 1 — Installing Docker:

The **Docker installation package** available in the official **Ubuntu 16.04 repository** *may not be the* **latest version**. To get the **latest version**, install **Docker** from the **official Docker repository**. This section shows you **how to do that**.

First, **add the GPG key** for the **official Docker repository** to the **system**:

```shell
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add the **Docker repository** to **APT sources**:

```shell
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

Next, **update** the **package database** with the **Docker packages** from the **newly added repository**:

```shell
$ sudo apt-get update
```

**Ensure** that **you install** from the **Docker repo** *instead of the default* **Ubuntu 16.04 repo**:

```shell
apt-cache policy docker-ce
```

You should **see output similar** to the **following**:

Output of apt-cache policy docker-ce

```shell
docker-ce:
Installed: (none)
Candidate: 17.03.1~ce-0~ubuntu-xenial
Version table:
17.03.1~ce-0~ubuntu-xenial 500
500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
17.03.0~ce-0~ubuntu-xenial 500
500 https://download.docker.com/linux/ubuntu xenial/stable amd64 Packages
```

Notice that `docker-ce` is **not installed**, but the **candidate for installation** is from the **Docker repository** for `Ubuntu 16.04`. Also note that the **docker-ce version number** might be **different**.

Finally, **install Docker**:

```shell
$ sudo apt-get install -y docker-ce
```

**Docker** should **now be installed**, the **daemon started**, and the **process enabled** to **start on boot**. *Check that it's running*:

```shell
$ sudo systemctl status docker
```

The **output** *should be similar* **to the following**, showing that the **service** is **active** and **running**:

Output

```shell
docker.service - Docker Application Container Engine

Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)

Active: active (running) since Sun 2016-05-01 06:53:52 CDT; 1 weeks 3 days ago

Docs: https://docs.docker.com

Main PID: 749 (docker)
```

The **installation of Docker** *gives you not just the* **Docker service (daemon)** but also the **Docker command line utility** or the **Docker client**. We'll explore how to use the **Docker command** later in **this tutorial**.

## Step 2 — Executing The Docker Command Without Sudo (Optional) ##

By **default**, running the **Docker command** requires **root privileges**; therefore, you have to **prefix the command** with `sudo`. **It can also be run** by **a user** in the **Docker group**, which is **automatically created** during the **Docker Installation**. *If you attempt to run* the **Docker command** *without prefixing it with* `sudo` *or without being in the* **docker group**, you'll **get an output** like this:

Output

```shell
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.

See 'docker run --help'.
```

If you want to **avoid typing** `sudo` whenever you run the **Docker command**, **add** your `username` to the **Docker group**:

```shell
$ sudo usermod -aG docker ${USER}
```

To **apply** the **new group membership**, **log out** of **the server**, then **log back in**.