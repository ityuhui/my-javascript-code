const express = require('express')
const app = express()
const port = 3000

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://192.168.22.121:27017/";

app.get('/', async (req, res) => {
    var html = "";
    const client = new MongoClient(url);
    const database = client.db("mydb");
    const customers = database.collection("customers");
    const cursor = await customers.find({});
    await cursor.forEach(doc => html += doc. name);

    res.send(html);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
