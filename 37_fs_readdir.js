/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:25:49
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:26:40
*/
const fs = require('fs');

fs.readdir('./',(err, files) => {
    if(err){
        throw err
    }

    console.log(files)
})
