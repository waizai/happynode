/*
* @Author: dangxiaoli
* @Date:   2017-12-19 23:34:03
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2017-12-21 14:30:07
*/

console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5,1));
console.log(Buffer.allocUnsafe(5,1));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test','base64'));



//Buffer.alloc(10)返回一个指定大小的被填满的 Buffer 实例。
//这个方法会明显地比 Buffer.allocUnsafe(size) 慢，但可确保新创建的 Buffer 实例绝不会包含旧的和潜在的敏感数据。



//Buffer.allocUnsafe(5,1)返回一个新建的指定 size 的 Buffer，但它的内容必须被初始化，可以使用 buf.fill(0) 或完全写满。




//Buffer.from(array) 返回一个新建的包含所提供的字节数组的副本的 Buffer




