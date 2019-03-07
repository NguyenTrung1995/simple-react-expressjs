const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const fileUpload = require('express-fileupload');
const apis = require('./api');
const upload = require('./upload');

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}));
app.use('/api', apis);
app.use('/api/upload', upload);

app.listen(5000, () => console.log("Listening on port 5000!"));
