/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:28:14
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:29:02
*/
const fs = require('fs');

fs.rmdir('./testtt',(err) => {
    if(err){
        throw err
    }

    console.log('del')
})
