/*
* @Author: dangxiaoli
* @Date:   2017-12-20 13:52:15
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 14:45:52
*/

/*
*   buf.length
*   buf.toString()
*   buf.fill()
*   buf.equals()
*   buf.indexOf()
*   buf.copy()
*/



const buf = Buffer.from('this is a test!')
console.log(buf.length)
//返回 buf 在字节数上分配的内存量。 注意，这并不一定反映 buf 内可用的数据量。

const buf2 = Buffer.alloc(10);
buf2[0] = 2;

console.log(buf2.length)


console.log(buf.toString('base64'))


const buf3 = Buffer.allocUnsafe(10);
console.log(buf3)
console.log(buf3.fill(10, 2, 6))


const buf4 = Buffer.from('test')
const buf5 = Buffer.from('test')
const buf6 = Buffer.from('test!')

console.log(buf4.equals(buf5))
console.log(buf4.equals(buf6))


const buf7 = Buffer.from('this is a buffer');
console.log(buf7.indexOf('a'))




