/*
* @Author: dangxiaoli
* @Date:   2017-12-21 21:23:20
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 21:25:13
*/
const fs = require('fs');

fs.unlink('./wizaia',() => {
    console.log('del done!!')
})
