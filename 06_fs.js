/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:51:23
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-18 20:49:20
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