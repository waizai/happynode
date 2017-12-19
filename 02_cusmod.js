/*
* @Author: dangxiaoli
* @Date:   2017-12-18 19:00:50
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:13:42
*/


console.log('this is a moudle')

const testVar = 100;

function test(){	
	console.log(testVar)
}


module.exports.testVar = testVar;
module.exports.testFn = test;



//module输出的时候，是全部加载