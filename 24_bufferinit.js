/*
* @Author: dangxiaoli
* @Date:   2017-12-19 23:34:03
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 23:38:21
*/

console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5,1));
console.log(Buffer.allocUnsafe(5,1));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test','base64'));
