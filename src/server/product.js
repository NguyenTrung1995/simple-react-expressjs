var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";

module.exports = {
    fetchProducts: function(callback) {
        MongoClient.connect(url, (error, client) => {
            if (error) throw error;
            const db = client.db("WatchSale");
            db.collection("product").find({}).toArray(function(error, result) {
                if (error) throw error;
                callback(result);
                client.close();
            })
        })
    },

    fetchProduct: function(alt, callback) {
        MongoClient.connect(url, (error, client) => {
            if (error) throw error;
            const db = client.db("WatchSale");
            db.collection("product").findOne({ alt: alt }, (err, result) => {
                if (err) throw error;
                callback(result);
                client.close();
            })
        })
    }
}