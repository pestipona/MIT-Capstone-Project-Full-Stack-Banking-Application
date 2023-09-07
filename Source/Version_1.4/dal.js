const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

// connects to the mongo database
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected successfully to db server!!!');

    // connect to myProject database
    db = client.db('BankDataBase');
});

// creates a user account
function create(name, email, password, balance) {
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

module.exports = {create, all};