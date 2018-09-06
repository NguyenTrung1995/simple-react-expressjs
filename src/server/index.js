const express = require("express");
var bodyParser = require("body-parser");

const app = express();

const user = require('./user.js');

app.use(express.static("dist"));
app.use(bodyParser.json());

app.get('/hehe', (req, res) => {
    res.send('hehe');
})

app.post("/api/signin", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  user.validateSignIn(email, password, result => {
    if (result) {
      res.send('success');
    }
    else {
      res.send('fail');
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
