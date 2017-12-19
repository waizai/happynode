/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:24:16
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 13:34:52
*/
const {parse,format} = require('path');

const filePath = '/usr/local/node_modules/n/package.json';

const ret = parse(filePath)
console.log(ret)

console.log(format(ret))