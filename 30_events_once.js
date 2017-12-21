/*
* @Author: dangxiaoli
* @Date:   2017-12-21 20:48:33
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 20:50:48
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.once('test',(a) => {
    console.log('this is a test' + a)
})



setInterval(() => {
    myEmitter.emit('test','params')
},500)
