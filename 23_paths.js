/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:47:57
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:38:27
*/
const path = require('path')
const mod = require('./02_cusmod.js');


console.log(mod.testVar)
console.log('__dirname',__dirname)
console.log('process.cwd',process.cwd())
console.log('./',path.resolve('./'))



