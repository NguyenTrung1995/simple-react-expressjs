const express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
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

app.listen(8080, () => console.log("Listening on port 8080!"));
