/*
* @Author: dangxiaoli
* @Date:   2017-12-21 20:32:30
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 20:36:46
*/

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('test',() => {
    console.log('触发了一个事件')
})

setInterval(() => {
    myEmitter.emit('test')
},500)

