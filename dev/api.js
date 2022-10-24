const express = require('express');
const app = express();

app.get('/blockchain', function (req, res) {
  res.send('Hello VDM Blockchain');
});

app.post('/transaction', function (req, res) {
});

app.get('/mine', function (req, res) {
  res.send('Hello VDM Blockchain');
})

app.listen(3000, function (){
  console.log('Listening on port 3000...');
});
