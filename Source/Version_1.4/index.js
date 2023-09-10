var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// api endpoint (route) for create user account
app.get('/account/create/:name/:email/:password/:balance', function (req, res) {
    // create user
    dal.create(req.params.name, req.params.email, req.params.password, req.params.balance).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

//api endpoint (route) for login existing user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:    req.params.email,
        password: req.params.password
    });
});

// api endpoint (route) for get all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

// api endpoint (route) for deposit
app.get('/account/deposit/:email/:amount', function (req, res) {

    // search user
    dal.deposit(req.params.email, req.params.amount)
        // sending back to deposit.js the document from dal.js
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.send(error);
        });
})

// api endpoint (route) for withdraw
app.get('/account/withdraw/:email/:amount', function (req, res) {
    // search user
    dal.withdraw(req.params.email, req.params.amount)
        // sending back to deposit.js the document from dal.js
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.send(error);
        });
})

// api endpoint (route) for balance
app.get('/account/balance/:email', function (req, res) {
    res.send();
})


var port = 3000;
app.listen(port);
console.log('Connected successfully to the backend server on port: ' + port);