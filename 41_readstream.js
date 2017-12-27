/*
* @Author: dangxiaoli
* @Date:   2017-12-24 21:24:40
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-26 14:21:11
*/


const fs = require('fs');
const rs = fs.createReadStream('./41_readstream.js');

console.log(rs)

rs.pipe(process.stdout);
console.log(rs.pipe(process.stdout))
