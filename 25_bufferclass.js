/*
* @Author: dangxiaoli
* @Date:   2017-12-20 13:39:08
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 13:47:56
*/

/*
*  Buffer.byteLength
*  Buffer.isBuffer()
*  Buffer.concat()
*/




console.log(Buffer.byteLength('test'))
console.log(Buffer.byteLength('测试'))

const buf0 = Buffer.allocUnsafe(6)
console.log(Buffer.byteLength(buf0))


console.log(Buffer.isBuffer({}))
console.log(Buffer.isBuffer(Buffer.from([1 ,2, 3])))


const buf1 = Buffer.from('this ')
const buf2 = Buffer.from('is ')
const buf3 = Buffer.from('a ')
const buf4 = Buffer.from('test ')
const buf5 = Buffer.from('!')

const buf = Buffer.concat([buf1,buf2,buf3,buf4,buf5])

console.log(buf.toString())


