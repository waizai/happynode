/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:18:45
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:20:46
*/
const {join} = require('path');

console.log(join('/usr/','../local','bin/'))
console.log(join('/usr/','local/..','bin/'))

//path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

