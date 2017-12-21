/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:11:14
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:21:42
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
