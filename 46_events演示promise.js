/*
* @Author: dangxiaoli
* @Date:   2018-01-17 15:42:33
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2018-01-17 17:07:09
*/

//----------------演示Promise/A-----------------------
//定义promise对象
var Promise = function () {
    //实现继承事件类
    //call是基于对象继承，可以获取对象方法
    EventEmitter.call(this);
};
//继承事件通用方法
//inherited是基与原型的继承
util.inherits(Promise, EventEmitter);

//then()方法所做的事情是将回调函数存放起来
Promise.prototype.then = function(fulfilledHandler, errorHandler, progressHandler){
    if (typeof fulfilledHandler === 'function') {
        // 利用once()方法，保证成功回调只执行一次
        this.once('success', fulfilledHandler); }
    if (typeof errorHandler === 'function') {
        // 利用once()方法，保证异常回调只执行一次
        this.once('error', errorHandler);
    }
    if (typeof progressHandler === 'function') {
        this.on('progress', progressHandler); }
    return this;
}

// 定义延迟对象
//触发执行这些回调函数的地方
var Deferred = function () {
    this.state = 'unfulfilled';
    this.promise = new Promise();
};


Deferred.prototype.resolve = function (obj) {
    this.state = 'fulfilled';
    this.promise.emit('success', obj);
};


Deferred.prototype.reject = function (err) {
    this.state = 'failed';
    this.promise.emit('error', err);
};
Deferred.prototype.progress = function (data) {
    this.promise.emit('progress', data);
};



//------------封装典型的响应对象-------------------
//原来的代码
res.setEncoding('utf8');
res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
});
res.on('end', function () {
    // Done
});
res.on('error', function (err) {
    // Error
});


//转换后
res.then(function(ful){
    //Done
},function(err){
    //Error
},function(chunk){
    console.log('BODY: ' + chunk);
})


//如何改造使用这种API
// const promisify = require('util').promisify;

const promisify = function(res){
    // 新建一个deferred对象
    var deferred = new Deferred();
    var result = '';
    res.on('data', function (chunk) {
        result += chunk;
        deferred.progress(chunk);
    });
    res.on('end', function () {
        deferred.resolve(result);
    });
    res.on('error', function (err) {
        deferred.reject(err);
    });
    //这里返回deferred.promise的目的是为了不让外部程序调用 resolve()和reject()方法，更改内部状态的行为交由定义者处理
    return deferred.promise;
}

//Promise和Deferred的差别

//---------------------Q模块---------------------------------

defer.prototype.makeNodeResolver = function(){
    var self = this;
    return function(err, value){
        if(err){
            self.reject(err)
        }else if(arguments.length > 2){
            self.resolve(array_slice(arguments, 1))
        }else {
            self.resolve(value);
        }
    }
}


//-------------------fs.readFile------------------------------

var readFile = function(file, encoding){
    var deferred = Q.defer();
    fs.readFile(file, encoding, deferred.makeNodeResolver());
    return deferred.promise;
}


//定义后的调用























