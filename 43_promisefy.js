/*
* @Author: dangxiaoli
* @Date:   2017-12-24 21:54:53
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-24 22:01:33
*/
// () => {
//     () => {
//         () => {

//         }
//     }
// }
//
// 回调地狱


const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./43_promisefy.js').then(data => {
    console.log(data.toString());
}).catch(ex => {
    console.log(ex);
})


async function test(){
    try{
        const content = await read('./43_promisefy.js');
        console.log(content.toString())
    }catch(ex){
        console.log(ex);
    }
}

test()
