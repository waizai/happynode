/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:21:56
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 13:23:36
*/
const {basename,dirname,extname} = require('path');

const filePath = '/usr/local/bin/no.txt';

console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))