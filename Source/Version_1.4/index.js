// load all requirements
const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./dal.js');
const admin   = require('./admin');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if (typeof authorizationHeader !== 'undefined') {
        const token = authorizationHeader.split(' ')[1]; // Get the token from the Authorization header
        admin.auth().verifyIdToken(token)
            .then(decodedToken => {
                // Token is valid, and decodedToken contains user information
                req.user = decodedToken;
                next(); // Proceed to the next middleware (i.e., route handler)
            })
            .catch(error => {
                // Token verification failed
                res.status(401).json({ error: 'Unauthorized' });
            });
    } else {
        // No token provided in the headers
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// open api endpoint (route) for creating a user account
app.get('/account/create/:name/:email/:password/:balance', function (req, res) {

    // create user
    dal.create(req.params.name, req.params.email, req.params.password, req.params.balance).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// open api endpoint (route) for logging in existing user
app.get('/account/login/:email/:password', function (req, res) {

    res.send({
        email:    req.params.email,
        password: req.params.password
    });
});

// secure api endpoint (route) to logout of authentication
// This route is protected, and req.user contains the authenticated user's information
app.get('/account/logout', function (req, res) {

    res.send({
        email:    req.params.email,
        password: req.params.password
    });
});

// secure api endpoint (route) for get all accounts
// This route is protected, and req.user contains the authenticated user's information
app.get('/account/all', function (req, res) {

    // read token from header
    const idToken = req.headers.authorization

    admin.auth().verifyIdToken(idToken)
        .then(function (decodedToken) {

            // This makes a call to the data abstraction layer (dal) that interfaces with the mongoDB
            dal.all().
            then((docs) => {
                console.log('This is what was returned from dal.js', docs);
                res.send(docs);
            });

        }).catch(function (error) {
            console.log('error:', error);
            res.send('Authentication Fail!');
    });

});

// secure api endpoint (route) for deposit
// This route is protected, and req.user contains the authenticated user's information
app.get('/account/deposit/:email/:amount', verifyToken, function (req, res) {

    // This makes a call to the data abstraction layer (dal) that interfaces with the mongoDB
    dal.deposit(req.params.email, req.params.amount)
        // sending back to deposit.js the document from dal.js
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.send(error);
        });
})

// secure api endpoint (route) for withdraw
// This route is protected, and req.user contains the authenticated user's information
app.get('/account/withdraw/:email/:amount', function (req, res) {

    // This makes a call to the data abstraction layer (dal) that interfaces with the mongoDB
    dal.withdraw(req.params.email, req.params.amount)
        // sending back to deposit.js the document from dal.js
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.send(error);
        });
})

// secure api endpoint (route) for balance
// This route is protected, and req.user contains the authenticated user's information
app.get('/account/balance/:email', function (req, res) {

    // This makes a call to the data abstraction layer (dal) that interfaces with the mongoDB
    dal.balance(req.params.email)
        // sending back to deposit.js the document from dal.js
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            res.send(error);
        });
})

const port = 3000;
app.listen(port, () => {
    console.log('Connected successfully to the backend server on port: ' + port);
})