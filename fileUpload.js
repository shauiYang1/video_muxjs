// var crypto = require('crypto');
// var fs = require('fs');
import crypto from 'crypto';
import fs from 'fs';
import { Buffer } from 'buffer';
import SHA256 from 'crypto-js/sha256.js';


console.log('buffer', Buffer)
console.log('buffer', SHA256('1212').toString())
function calculateMD5(filePath) {
  const hash = crypto.createHash('md5');
  const fileContent = fs.readFileSync(filePath);
  console.log('fileContent', fileContent)
  SHA256(fileContent).toString()
  hash.update(fileContent);
  const md5Hash = hash.digest('hex');
  return md5Hash;
}
// window.calculateMD5 = calculateMD5;
const filePath = './洽谈室aoucl.zip';
// const filePath = './测试文件上传.txt';
const md5Hash = calculateMD5(filePath);
console.log(`MD5 hash of ${filePath} is:`, md5Hash);
