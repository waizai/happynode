/*
* @Author: dangxiaoli
* @Date:   2017-12-20 13:39:08
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 14:43:54
*/

/*
*  Buffer.byteLength
*  Buffer.isBuffer()
*  Buffer.concat()
*/




console.log(Buffer.byteLength('test'))
console.log(Buffer.byteLength('测试'))
//返回一个字符串的实际字节长度。 这与 String.prototype.length 不同，因为那返回字符串的字符数。



const buf0 = Buffer.allocUnsafe(6)
console.log(Buffer.byteLength(buf0))


console.log(Buffer.isBuffer({}))
console.log(Buffer.isBuffer(Buffer.from([1 ,2, 3])))
//如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。




const buf1 = Buffer.from('this ')
const buf2 = Buffer.from('is ')
const buf3 = Buffer.from('a ')
const buf4 = Buffer.from('test ')
const buf5 = Buffer.from('!')

const buf = Buffer.concat([buf1,buf2,buf3,buf4,buf5])

console.log(buf.toString())

//如果提供了 totalLength，totalLength 必须是一个正整数。
//如果从 list 中计算得到的 Buffer 长度超过了 totalLength，则合并的结果将会被截断为 totalLength 的长度。



const buf6 = Buffer.alloc(10);
const buf7 = Buffer.alloc(14);
const buf8 = Buffer.alloc(18);
const totalLength = buf6.length + buf7.length + buf8.length;
console.log('totalLength',totalLength);

const bufA = Buffer.concat([buf6, buf7, buf8], totalLength);

console.log(bufA.length)





