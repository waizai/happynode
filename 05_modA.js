/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:36:37
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-18 19:41:50
*/
module.exports.test = 'A';


const modB = require('./05_modB.js')

console.log('modA: ',modB.test)


module.exports.test = 'AAA';
