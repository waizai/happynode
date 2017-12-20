/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:20:47
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:22:15
*/
const {resolve} = require('path');

console.log(resolve('./'))

console.log(resolve('/foo/bar', './baz'))

//path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。

