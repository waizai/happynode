/*
* @Author: dangxiaoli
* @Date:   2017-12-21 20:57:52
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-23 22:19:21
*/
const fs = require('fs');


fs.readFile('./32_fs.js','utf8',(err, data) => {
    if(err){
        throw err
    }

    console.log(data)
})


// fs.readFile('./32_fs.js',(err, data) => {
//     if(err){
//         throw err
//     }
//     const buf = Buffer.from(data)

//     console.log(buf.toString())
// })


const data = fs.readFileSync('./01_run.js','utf8')
console.log(data)
