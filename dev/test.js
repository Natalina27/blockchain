const Blockchain = require( './blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIGTVNHUD', 'GHGTHJ*KBF');
bitcoin.createNewBlock(567, 'OIGTVIKNHUD', 'GHGTHLLJ*KBF');

bitcoin.createNewTransaction(100, 'ALEXOIGTVNHUD', 'JENNGHGTHJ');

bitcoin.createNewBlock(111, 'OIGTVUTNHUD', 'GHGTHJPKG*KBF');

bitcoin.createNewTransaction(50, 'ALEXOIGTVNHUD', 'JENNGHGTHJ');
bitcoin.createNewTransaction(300, 'ALEXOIGTVNHUD', 'JENNGHGTHJ');
bitcoin.createNewTransaction(2000, 'ALEXOIGTVNHUD', 'JENNGHGTHJ');

bitcoin.createNewBlock(333, 'IOIYGTVUTNHUD', 'GHGOUYTTHJPBF');

console.log('bitcoin', bitcoin);
console.log('bitcoin.chain[2]', bitcoin.chain[2]);
console.log('bitcoin.chain[3]', bitcoin.chain[3]);
