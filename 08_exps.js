/*
* @Author: dangxiaoli
* @Date:   2017-12-18 21:00:25
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:25:08
*/

// const exports = moudle.exports;

// {
// 	function(exports,require,module,__filename,__dirname){
// 		//code
// 	}
// }


// exports.test = 100;
// exports = {
// 	a : 1,
// 	b : 2,
// 	test : 100
// }
// 
module.exports = {
	a : 1,
	b : 2,
	test : 100
}




//本例子展示包裹模块的exports和module.exports的区别   
//前面2块注释的内容已经写的很清楚了，在模块执行的时候，会先执行const exports = moudle.exports;
//但是 不能改变exports的指向