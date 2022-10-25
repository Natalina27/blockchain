const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function (req, res) {
  res.send('Hello VDM Blockchain!!!');
});

app.post('/transaction', function (req, res) {
  console.log(req.body);
  //res.send(`Amount of this transaction is ??? bitcoins`);
  res.send(`Amount of this transaction is ${req.body.amount} bitcoins`);
});

app.get('/mine', function (req, res) {
  res.send('It is mine endpoint');
})

app.listen(3000, function (){
  console.log('Listening on port 3000...');
});
