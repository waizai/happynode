/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:29:24
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:31:46
*/
const fs = require('fs');

fs.watch('./',{
    recursive : true
},(eventType, fileName) => {
    console.log(eventType,fileName)
})

