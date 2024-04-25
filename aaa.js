var crypto = require('crypto');
// var fs = require('fs');
var { Buffer } = require('buffer');
var SHA256 = require(
  'crypto-js/sha256.js'
);

console.log('buffer', Buffer)
function calculateMD5(arrayBuffer) {
  const hash = crypto.createHash('md5');
  // const fileContent = fs.readFileSync(filePath);
  const bf = Buffer.from(arrayBuffer);
  const aa = SHA256(arrayBuffer);
  console.log('aa',aa.toString())
  hash.update(bf);
  const md5Hash = hash.digest('hex');
  return md5Hash;
}
window.calculateMD5 = calculateMD5;