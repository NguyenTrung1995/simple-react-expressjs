var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";

module.exports = {
    order: function(name, phone, email, address, package) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db("WatchSale");
            db.collection("order").insertOne(
                {
                    Name: name,
                    Phone: phone,
                    Email: email,
                    Address: address,
                    Package: package
                },
                function(err, result) {
                    assert.equal(err, null);
                    console.log("Saved a order");
                }
            )
        })
    }
}