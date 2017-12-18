/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:36:47
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-18 19:41:49
*/
module.exports.test = 'B';


const modA = require('./05_modA.js')

console.log('modB: ',modA.test)


module.exports.test = 'BBB';