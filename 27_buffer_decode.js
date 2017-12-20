/*
* @Author: dangxiaoli
* @Date:   2017-12-20 14:24:13
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-20 14:28:42
*/

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8')


const buf8 = Buffer.from('中文字符串')

for(let i = 0,len = buf8.length; i < len; i += 5){
    const b = Buffer.allocUnsafe(5)
    buf8.copy(b, 0, i)
    console.log(b.toString())
}

for(let i = 0,len = buf8.length; i < len; i += 5){
    const b = Buffer.allocUnsafe(5)
    buf8.copy(b, 0, i)
    console.log(decoder.write(b))
}