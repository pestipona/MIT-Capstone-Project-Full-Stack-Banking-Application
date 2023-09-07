# I. Useful Docker Commands:


### Build image:

```shell
# The -t gives your image a name
$ docker build -t YourImageName.
```

### List Containers:

```shell
# Containers currently running
$ docker ps -a
```

### List Images:

```shell
# List all Docker images
$ docker images -a
```

### Delete containers:

```shell
# Delete every Docker container
# Run this command first because images are attached to containers
$ docker rm $(docker ps -a -q)
```

### Delete images:

```shell
# Delete every Docker image
$ docker rmi $(docker images -q)
```

### Force delete images:

```shell
# to force delete images to prevent their use
$ docker rmi -f $(docker images -q)
```

### Stop container:

```shell
# Stop a container
$ docker stop <container id>
```

### Shell in running container:

```shell
# From Docker 1.3 onwards
$ sudo docker exec -i -t <containerIdOrName> bash
```