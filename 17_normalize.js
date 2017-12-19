/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:15:26
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 13:18:11
*/
const {normalize} = require('path');

//等同于const normalize = require('path').normalize;


console.log(normalize('/usr//local/bin/'))

console.log(normalize('/usr//local/../bin/'))