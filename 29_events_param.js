/*
* @Author: dangxiaoli
* @Date:   2017-12-21 20:38:14
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 20:47:56
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('test',(a,b) => {
    console.log(a,b,this)
})

myEmitter.emit('test','a','b')



myEmitter.on('test1',err > {
    console.log(err);
})


myEmitter.emit('test1',new Error('opps!'))
