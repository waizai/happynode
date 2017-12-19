/*
* @Author: dangxiaoli
* @Date:   2017-12-19 11:48:25
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 11:57:25
*/

function test(){
	const a = parseInt(Math.random() * 10)
	const b = parseInt(Math.random() * 10)
	const c = test2(a,b)
}




function test2(a , b){
	if(a > b){
		a += a * 2
	}else{
		b -= a;
	}
	return a + b
}


test()