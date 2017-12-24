/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:07:46
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-23 22:31:45
*/
const fs = require('fs');

const buf = Buffer.from('this is a test!')

fs.writeFile('./textwai',buf,err => {
    if(err){
        throw err
    }
    console.log('done!')
})


//如果 data 是一个 buffer，则忽略 encoding 选项。它默认为 'utf8'。
