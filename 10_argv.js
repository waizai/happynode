/*
* @Author: dangxiaoli
* @Date:   2017-12-18 21:22:22
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:27:02
*/

const {argv,argv0,execArgv,execPath} = process;

argv.forEach(item => {
	console.log(item)
})


console.log(argv0)


console.log(execArgv)



console.log(execPath)



//process对象是 Node 的一个全局对象，提供当前 Node 进程的信息。
//它可以在脚本的任意位置使用，不必通过require命令加载。该对象部署了EventEmitter接口。

