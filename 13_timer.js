/*
* @Author: dangxiaoli
* @Date:   2017-12-19 11:36:08
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 11:47:58
*/

//它是在 I/O 事件的回调之后被触发
setImmediate(() => {
	console.log('setImmediate')
});


setTimeout(() => {
	console.log('setTimeout')
},0)

//事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。
process.nextTick(() => {
	console.log('nextTick')
	//递归调用nextTick callbacks 会阻塞任何I/O操作，就像一个while(true); 循环一样。
	process.nextTick(() => {
		console.log('nextTick22')
	})
})