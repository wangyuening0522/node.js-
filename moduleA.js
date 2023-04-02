function add(a,b)
{
    return a+b;
};
//commenJS是一种模块规范，他规定每个模块内部的module变量代表当前模块，
//这个变量是一个对象，他的module.exports属性（即module.exports）是对外的接口
//加载某个模块，其实就是加载该模块的module.exports属性
//AMD是异步模块定义
module.exports={
    add:add
};
//本质上一个文件就是一个module，
//当我们require一个文件的时候，
//真正对应去找的是module.export

//细节：（可忽略）
//moduleA.js 其实等价于
//module.exports = {}
//exports = {     //这里省去.xxx
// name: 'moduleA'
// }
//1.module.exports 初始值为一个空对象 {}
//2.exports 是指向的 module.exports 的引用
//（在上面这里例子中，exports这个指针被重新赋值成了一个新的对象。）
//3.require() 返回的是 module.exports 而不是 exports
//（在上面这个例子中module.export没有被赋予任何值）

