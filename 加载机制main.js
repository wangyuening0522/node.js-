const test1=require('./加载机制test.js');
console.log(test1.counter);//3
test1.inCounter();//使用inCounter函数企图让couter++，但是由于输入的值（基础类型）是被输出的值的拷贝
//test.js模块加载后，他的内部变化就不会影响到输出的test.counter
console.log(test1.counter);//3
//test.counter是一个原始类型的值，会被缓存


//如何修改？  --将test.js中导出写成一个函数
// module.exports = {
//     get counter() { // 写成一个函数
//       return counter
//     },
//     incCounter,
//   };