/*
* @Author: dangxiaoli
* @Date:   2017-12-19 13:39:03
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:35:37
*/
const {
	sep,
	delimiter,
	win32,
	posix
} = require('path');


console.log('sep: ',sep)
console.log('win sep: ',win32.sep)
console.log('PATH: ',process.env.PATH)
console.log('delimiter: ',delimiter)
console.log('win delimiter: ',win32.delimiter)


//sep提供了平台特定的路径片段分隔符：
// Windows 上是 \
// POSIX 上是 /


// delimiter提供平台特定的路径分隔符：
// Windows 上是 ;
// POSIX 上是 :