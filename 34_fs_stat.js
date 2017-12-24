/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:11:14
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-23 22:36:03
*/
const fs = require('fs');


fs.stat('./34_fs_stat.js',(err, stats) => {
    if(err){
        throw err
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats)
})


//stat方法的参数是一个文件或目录，它产生一个对象，
//该对象包含了该文件或目录的具体信息。我们往往通过该方法，
//判断正在处理的到底是一个文件，还是一个目录
