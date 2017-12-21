/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:07:46
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:10:45
*/
const fs = require('fs');

const buf = Buffer.from('this is a test!')

fs.writeFile('./textwai',buf,err => {
    if(err){
        throw err
    }
    console.log('done!')
})


