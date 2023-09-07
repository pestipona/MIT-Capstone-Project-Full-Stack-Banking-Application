const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://3.89.197.91:27017/';
let db = null;

/*
// connects to ec2 instance hosting mongo database
const Client = require('ssh2').Client;
const conn = new Client();

conn.on('ready', () => {
    console.log('Connected to EC2 instance via SSH');

    // can now execute commands on the EC2 instance.
    conn.exec('ls', (err, stream) => {
        if (err) throw err;
        stream.on('data', (data) => {
            console.log(`Received: ${data}`);
        }).on('close', () => {
            conn.end();
        });
    });

}).connect({
    host: '3.89.197.91',
    port: 22,
    username: 'ec2-user',
    privateKey: require('fs').readFileSync('C:\\Users\\paul_\\Downloads\\AWS-Bank-App.pem')

});
*/


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