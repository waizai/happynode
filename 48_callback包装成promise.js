/*
* @Author: dangxiaoli
* @Date:   2018-01-19 23:33:17
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2018-01-20 22:30:00
*/
var fs = require("fs");


//callback接口包装成promise
let promisify = (fn, receiver) => {
    //promisify返回匿名函数
    return (...args) => {
        //匿名函数返回Promise实例
        return new Promise((resolve, reject) => {
            //给fs.readFile的参数和回调包装，重点是回调reject 或者 resolve
            //不懂为啥要apply   下面注释也可以正常执行
            fn.apply(receiver, [...args, (err, res) => {
                return err ? reject(err) : resolve(res);
            }])
            // console.log(`log fs readFile ${receiver}`)
            // fn(...args,(err, res) => {
            //     return err ? reject(err) : resolve(res);
            // })
        })
    }
}



// var promisify = function promisify(fn, receiver) {
//     //promisify返回匿名函数
//   return function () {
//     //读取promisify参数
//     for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
//       args[_key] = arguments[_key];
//     }
//     //返回Promise实例
//     return new Promise(function (resolve, reject) {
//       fn.apply(receiver, [].concat(args, [function (err, res) {
//         return err ? reject(err) : resolve(res);
//       }]));
//     });
//   };
// };

// new Promise(function (resolve, reject) {
//       fn.apply(receiver, [].concat(args, [function (err, res) {
//         return err ? reject(err) : resolve(res);
//       }]));
//     });

// function () {

//     for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
//       args[_key] = arguments[_key];
//     }

//     return new Promise(function (resolve, reject) {
//       fn.apply(receiver, [].concat(args, [function (err, res) {
//         return err ? reject(err) : resolve(res);
//       }]));
//     });
//   };



var readFilePromise = promisify(fs.readFile, fs); //包装为 Promise 接口
readFilePromise("01_run.js", "utf8").then(function(content){
    console.log(`${content}`)
}).catch(function(err){
    //异常情况
    console.log(err)
})
