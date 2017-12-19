/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:20:47
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 14:46:12
*/
const {resolve} = require('path');

console.log(resolve('./'))

console.log(resolve('/foo/bar', './baz'))