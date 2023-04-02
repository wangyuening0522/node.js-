var counter=3;
function inCounter()
{
    counter++;
}
// module.exports={
//     counter,
//     inCounter,
// };
module.exports={
    //将变量写成一个函数可以得到内部变动后的值
    get counter()
    {
        return counter
    },
    inCounter,
};
//一：exports两部分：counter属性和inCounter方法
//其中counter属性被包裹在getter函数中  
//getter函数：
//1.语法：get 要获取的属性名称(){逻辑操作，最终返回该属性的值}
//2.调用：像访问对象的属性一样直接访问，上下两种都可通过test(main中引入文件起的名字).counter来访问如
// const obj = {
//     get name() {
//       return 'John';
//     }
//   };
  
//   console.log(obj.name); // 输出 "John"
//3.特点：Getter只能获取属性值，Setter修改属性值，语法类型，只需get关键字替换为set关键字,参数中接受要设置的属性值

//模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
//主要是通过 require() 函数来加载模块。当执行 require() 函数时，会先查找模块是否已经被加载过，如果没有，则会按照模块的路径查找模块文件并加载，最后将模块导出的对象返回给调用者。



//二：两种导出方式的不同和关系
//1.module.exports = value  
//例如
// function add(a, b) {
//     return a + b;
//   }
  
//   module.exports = add;
//将一个函数、一个对象或者一个类作为模块的导出对象。
//2.exports.xxx = value
//例如
// exports.add = function(a, b) {
//     return a + b;
//   };
//将多个函数或者对象作为模块的导出对象。
//关系：使用exports相当于在module.exports 对象中添加了一个属性
//（小点：）因此如果直接对 exports 对象进行赋值，会导致 exports 对象与 module.exports 对象不再引用同一个对象，从而导致 exports 对象失效。