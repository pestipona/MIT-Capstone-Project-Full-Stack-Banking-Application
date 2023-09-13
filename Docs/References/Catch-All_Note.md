
To **build** a **docker image**, the `-t` is to **specify** your **image name**.

```shell
docker build -t <your image name>
```

To **list** all **containers** currently **running**, the `-a` is for **all containers**

```shell
docker ps -a
```

To **list** all **docker images**
```shell
docker images -a
```

To **stop** a **container**
```shell
docker stop <container id>
```

To **open a shell** in a running **container**
```shell
sudo docker exec -i -t <container id or name> bash
```

To **delete** all **docker containers**, must be **run first** before deleting a **docker image**
```shell
docker rm $(docker ps -a -q)
```

To **delete** all **docker images**
```shell
docker rmi $(docker images -q)
```

To **force delete** all **docker images**
```shell
docker rmi -f $(docker images -q)
```




The code snippet you provided is using jQuery to initialize a Bootstrap table using the `bootstrapTable` method.

`$(document).ready(function() { ... });` is a jQuery function that waits for the document to be fully loaded before executing the code inside the function. It ensures that the JavaScript code runs after the HTML document is ready and all elements are available for manipulation.

Inside the function, the code selects all `<table>` elements on the page using the `$('table')` selector. It then calls the `bootstrapTable` method on the selected table(s) and passes an object as the argument. The object has a `data` property that contains the data to be displayed in the table.

In your code, `mydata` is likely a variable that holds the data you want to populate in the table. It is being passed as the value of the `data` property. You should replace `mydata` with the actual variable or JSON data that you want to display in the table.

Overall, this code initializes the Bootstrap table plugin on the selected table(s) and populates it with the specified data.

```jquery-css
$(document).ready(function (){
    // Use the given data to create the table and display it
    $('table').bootstrapTable({data: mydata});
});
```