const express = require("express");
var bodyParser = require("body-parser");

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());

app.get('/hehe', (req, res) => {
    res.send('hehe');
})

app.post("/api/signin", function(req, res) {
  var user_name = req.body.email;
  var password = req.body.password;
  if (user_name === "admin@gmail.com" && password === "admin") {
    console.log('success');
    res.send("success");
  } else {
    res.send("Failure");
  }
});

app.listen(8080, () => console.log("Listening on port 8080!"));
