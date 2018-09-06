const express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
const app = express();

const user = require('./user.js');

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(session({ secret: 'my-secret' }));

app.get('/hehe', (req, res) => {
    res.send('hehe');
})

app.post("/api/signin", function(req, res) {
  sessions = req.session;
  console.log(sessions);
  var email = req.body.email;
  var password = req.body.password;
  user.validateSignIn(email, password, result => {
    if (result) {
      sessions.username = email;
      console.log(sessions.username);
      res.send('true');
    }
    else {
      res.send('false');
    }
  })
});

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
