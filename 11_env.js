/*
* @Author: dangxiaoli
* @Date:   2017-12-19 11:24:56
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-19 12:27:59
*/
const {env} = process ;


console.log(env)

env.test = 100;
console.log(env.test)

console.log(process.env.test)


//process.env：返回一个对象，成员为当前Shell的环境变量，比如process.env.HOME。