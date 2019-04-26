const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

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
  
router.post("/signin", function(req, response) {
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
});
  
router.get("/signout", (req, res) => {
    req.session.username = undefined;
    res.send('true');
})
  
router.get('/getInfo', (req, res) => {
    if (req.session.username) {
        res.setHeader('Content-Type', 'text/html');
        res.end(req.session.username);
    } 
    else {
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
  
router.post("/signup", function(req, response) {
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

router.post("/order", function(req, res) {
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

router.get("/fetchdata", (req, res) => {
fetch("https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/product/products")
    .then(response => response.json())
    .then(data => res.send(data))
})

router.get("/fetchdata/:product_name", (req, res) => {
const alt = req.params.product_name;
fetch(`https://hbpgpqsys9.execute-api.us-east-2.amazonaws.com/dev/product/${alt}`)
    .then(response => response.json())
    .then(data => res.send(data.product.Items[0]))
})

module.exports = router;