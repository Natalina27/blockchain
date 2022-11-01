# 1.Introduction
# 2.Blockchain data structure

* Blockchain.prototype.hashBlock
   > npm i sha256 --save

* Blockchain.prototype.proofOfWork
>//bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)

>// => repeatedly hash block until it finds correct hash => '0000xxxxxxx'

>// => uses current block data for the hash, but also the previousBlockHash

>// => continuously changes nonce value until it find the correct hash

>// => returns to us the nonce value that creates the correct hash

> Source code
https://github.com/erictraub/Learn-Blockchain-By-Building-Your-Own-In-JavaScript

# 3.Api - Express Js

> npm i express --save

to run server
> node dev/networkNode.js 

to restart the server automatically
> npm i nodemon --save

add in package.json:

 ```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon --watch dev -e js dev/networkNode.js"
}
```
to resolve error : TypeError: Cannot read property 'amount' of undefined

> npm i body-parser --save

and add to file
```js 
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```

to create unique random string

> npm i uuid --save
```js
const uuid = require('uuid/v1');
const {v1: uuid} = require('uuid');
```
to test in browser

http://localhost:3000/blockchain
http://localhost:3000/mine

# 4.Decentralized Blockchain Network - Introduction

## Creating Multiple Nodes

1. refactor api.to to networkNode.js
2. networkNode.js ->
```js 
  const port = process.argv[2];
//////
  app.listen(port, function (){
    console.log(`Listening on port ${port}...`);
  });
```
3. package.json -> 
```json
"node_1"
```
```json
"nodemon --watch dev -e js dev/networkNode.js 3001"
```
instead npm start -> npm run node_1
