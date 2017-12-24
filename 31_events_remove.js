/*
* @Author: dangxiaoli
* @Date:   2017-12-21 20:51:43
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-23 22:16:22
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

function fn1(){
    console.log('fn1')
}

function fn2(){
    console.log('fn2')
}

myEmitter.on('test',fn1)
myEmitter.on('test',fn2)

setInterval(() => {
    myEmitter.emit('test')
},500)

setTimeout(() => {
    // myEmitter.removeListener('test',fn2)
    // myEmitter.removeListener('test',fn1)
    myEmitter.removeAllListeners('test')
},1500)
