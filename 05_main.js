/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:44:07
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:13:19
*/

const modA = require('./05_modA.js')

const modB = require('./05_modB.js')

console.log(modA.test)
console.log(modB.test)


//一旦出现某个模块循环加载，就只输出已经执行的部分，还未执行的部分不会输出