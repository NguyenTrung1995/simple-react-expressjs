const express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
const fetch = require('node-fetch');

const app = express();

const user = require('./user.js');

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}));

app.post("/api/signin", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  user.validateSignIn(email, password, result => {
    if (result) {
      req.session.username = email;
      res.send(email);
    }
    else {
      res.send('false');
    }
  })
});

app.get("/api/signout", (req, res) => {
  req.session.username = undefined;
  res.send('true');
})

app.get('/api/getInfo', (req, res) => {
  if (req.session.username) {
    res.setHeader('Content-Type', 'text/html');
    res.end(req.session.username);
  } else {
    res.end('false');
  }
})

app.post("/api/signup", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  if(name && email && password) {
      user.signup(name, email, password)
  }
  else {
    res.send('Failure');
  }
});

app.post("/api/order", function(req, res) {

  const orderItem = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    package: req.body.package
  }
  
  fetch('https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/order/create', {
    method: 'POST',
    body: JSON.stringify(orderItem),
    headers: { 'Content-Type': 'application/json' }
    })
    .then(result => result.json())
    .then(result => res.send('A order added into order-table'))
})

app.get("/api/fetchdata", (req, res) => {
  fetch("https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/product/products")
    .then(response => response.json())
    .then(data => res.send(data))
})

app.get("/api/fetchdata/:product_name", (req, res) => {
  const alt = req.params.product_name;
  fetch(`https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/product/${alt}`)
    .then(response => response.json())
    .then(data => res.send(data.product.Items[0]))
})

app.listen(5000, () => console.log("Listening on port 5000!"));
