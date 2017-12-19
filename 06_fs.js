/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:51:23
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:14:35
*/

const fs = require('fs');


const result = fs.readFile('./06_fs.jss',(err,data) => {
	if(err){
		console.log(err)
	}else{
		console.log(data.toString())
	}
	
})

console.log(result)



//fs是filesystem的缩写，该模块提供本地文件的读写能力，基本上是POSIX文件操作命令的简单包装