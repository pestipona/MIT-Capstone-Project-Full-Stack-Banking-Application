const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://54.90.239.90:27017/';
let db = null;

// connects to the mongo database
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected successfully to db server!!!');

    // connect to myProject database
    db = client.db('BankDataBase');
});

// creates a user account
function create(name, email, password, balance) {
    // convert string input to float number for storage in database
    balance = parseFloat(balance);
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance};
        collection.insertOne(doc, {w:1}, function (err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
}

// returns all users from the table
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
}

// performs a deposit on the user's balance
function deposit(email, amount) {

    // convert string input to float number for storage in database
    amount = parseFloat(amount);

    return new Promise(async (resolve, reject) => {

        try {
            const customers = db.collection('users');

            // Search for the user document by email
            const user = await customers.findOne({ email });

            if (!user) {
                reject(new Error('User not found'));
                return;
            }

            // Update the user's balance
            user.balance = parseFloat(user.balance) + amount;

            // Update the document in the collection
            await customers.updateOne({ email }, { $set: { balance: user.balance } });

            // Resolve the Promise with the updated user document
            resolve(user);

        } catch (error) {
            reject(error);
        }
    })
}

// performs a withdrawal on the user's balance
function withdraw(email, amount) {

    // convert string input to float number for storage in database
    amount = parseFloat(amount);

    return new Promise(async (resolve, reject) => {

        try {
            const customers = db.collection('users');

            // Search for the user document by email
            const user = await customers.findOne({ email });

            if (!user) {
                reject(new Error('User not found'));
                return;
            }

            // Update the user's balance
            user.balance = parseFloat(user.balance) - amount;

            // Update the document in the collection
            await customers.updateOne({ email }, { $set: { balance: user.balance } });

            // Resolve the Promise with the updated user document
            resolve(user);

        } catch (error) {
            reject(error);
        }
    })
}

// performs a query on the user's balance
function balance(email) {

    return new Promise(async (resolve, reject) => {

        try {
            const customers = db.collection('users');

            // Search for the user document by email
            const user = await customers.findOne({ email });

            if (!user) {
                reject(new Error('User not found'));
                return;
            }

            // Resolve the Promise with the updated user document
            resolve(user);

        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {create, all, deposit, withdraw, balance};