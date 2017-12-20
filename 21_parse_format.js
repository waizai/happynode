/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:24:16
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:33:55
*/
const {parse,format} = require('path');

const filePath = '/usr/local/node_modules/n/package.json';

const ret = parse(filePath)
console.log(ret)

console.log(format(ret))

//path.parse() 方法返回一个对象，对象的属性表示 path 的元素。
//path.format() 方法会从一个对象返回一个路径字符串。