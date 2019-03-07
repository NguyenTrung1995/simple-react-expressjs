const express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var apis = require('./api');

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}));

app.use('/api', apis);

app.listen(5000, () => console.log("Listening on port 5000!"));
