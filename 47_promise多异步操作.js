/*
* @Author: dangxiaoli
* @Date:   2018-01-18 14:04:51
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2018-01-18 16:06:21
*/


//--------------------Promise的原理--------------------
Deferred.prototype.all = function (promises) {
    var count = promises.length;
    var that = this;
    var results = [];
    promises.forEach(function(promise, i){
        promise.then(function(data){
            count--;
            result[i] = data;
            if(count === 0){
                that.resolve(results);
            }
        },function(err){
            that.reject(err);
        });
    });
    return this.promise;
}

//使用
var promise1 = readFile("foo.txt", "utf-8");
var promise2 = readFile("bar.txt", "utf-8");
var deferred = new Deferred();

deferred.all([promise1, promise2])
.then(function (results) {
    // TODO
}, function (err) {
    // TODO
});

//--------------------promise进阶-------------------------
//按顺序依次执行 1， 2， 3， 4
//尝试给上述回调地狱改成事件
//支持序列执行的Promise
var Deferred = function () {
    this.promise = new Promise();
};

Deferred.prototype.resolve = function(obj){
    var promise = this.promise;
    var handler;
    while((handler = promise.queue.shift())){

    }
}





























