# Blockchain data structure

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

# Api - Express Js

> npm i express --save

to run server
> node dev/api.js 

to restart the server automatically
> npm i nodemon --save

add in package.json:

 ```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon --watch dev -e js dev/api.js"
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
