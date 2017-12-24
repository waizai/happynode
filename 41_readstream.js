/*
* @Author: dangxiaoli
* @Date:   2017-12-24 21:24:40
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-24 21:40:59
*/


const fs = require('fs');
const rs = fs.createReadStream('./41_readstream.js');


rs.pipe(process.stdout);
