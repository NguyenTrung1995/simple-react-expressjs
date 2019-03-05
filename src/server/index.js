const express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
const fetch = require('node-fetch');

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24 }
}));

const checkValidUser = (username, password) => {
  const user = {
    username,
    password
  }
  return fetch('https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/user/check-user', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

app.post("/api/signin", function(req, response) {
  var username = req.body.username;
  var password = req.body.password;
  const result = checkValidUser(username, password);
  result
    .then(res => res.result.Count)
    .then(res => {
      if (res === 1) {
        req.session.username = username;
        response.send(username);
      }
      else {
        response.send('false');
      }
    })
  // user.validateSignIn(email, password, result => {
  //   if (result) {
  //     req.session.username = email;
  //     res.send(email);
  //   }
  //   else {
  //     res.send('false');
  //   }
  // })
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

const validateByUserName = username => {
  const user = {
    username: username
  }
  return fetch('https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/user/get-username', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

app.post("/api/signup", function(req, response) {
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  const result = validateByUserName(user.username);
  result
    .then(res => res.result.Count)
    .then(res => {
      if (res === 0) {
        fetch('https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/user/create', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { 'Content-Type': 'application/json' }
          })
          .then(result => result.json())
          .then(result => response.send('Succeed'))
      }
      else {
        return response.send('Failed')
      }
    })
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
