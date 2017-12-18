/*
* @Author: dangxiaoli
* @Date:   2017-12-18 21:22:22
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-18 21:24:27
*/

const {argv,argv0,execArgv,execPath} = process;

argv.forEach(item => {
	console.log(item)
})