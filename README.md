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
