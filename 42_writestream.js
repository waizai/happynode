/*
* @Author: dangxiaoli
* @Date:   2017-12-24 21:45:25
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-24 21:53:30
*/
const fs = require('fs');
const ws = fs.createWriteStream('./test.txt');


const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num)
    if(num < 8){
        ws.write(num + '');
    }else{
        clearInterval(tid);
        ws.end();
    }
})

ws.on('finish',() => {
    console.log('done')
})

