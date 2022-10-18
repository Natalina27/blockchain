const Blockchain = require( './blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'OIGTJ^&FERVHKJYU';
const currentBlockData = [
  {
    amount: 10,
    sender: 'JACKHYTUIOTRFGJK',
    recipient: 'EMMASRFGGYJIOLLP'
  },
  {
    amount: 30,
    sender: 'JANNYKHYTUIOTRFGJK',
    recipient: 'GEMMASRFGGYJIOLLP'
  },
  {
    amount: 200,
    sender: 'KRISJACKHYTUIOTRFGJK',
    recipient: 'RAFYEMMASRFGGYJIOLLP'
  },
];

const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));


