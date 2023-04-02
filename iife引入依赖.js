//在 IIFE 模式中，可以通过传递参数的方式来引入依赖，从而实现模块之间的解耦和复用。
(function($,window,document){
//使用$,window,document编写代码
//定义私有函数
//输出欢迎信息
function sayHello(name)
{
    console.log('hello,'+name+'!');
}
//定义公共接口myModule，该接口通过叫用greet方法来输出欢迎信息
var myModule={
    greet:function(name)
    {
        sayHello(name);
    }
};
//暴露公共接口myModule给全局作用域
window.myModule=myModule;
})(jQuery,window,document);
//调用公共接口
myModule.greet('John');
//$  jQuery库
//jQuery 浏览器窗口对象
//document 文档对象
//通过传递这些参数，可以在函数内部使用它们，从而实现了对这些依赖的引入。
//除了传递参数的方式，还可以通过返回一个对象或函数来暴露模块的公共接口。这种方式称为“模块模式”，常用于创建 JavaScript 模块和插件。

//问1：对象属性的新加入
let people={
    name:'11',
    age:18,
};
people.ins='22';
console.log(people);
//给people对象新的属性赋值可以加入新属性

//问2：为什么给window对象属性就可以全局访问属性

//在 JavaScript 中，全局作用域是指在所有函数之外定义的变量和函数，可以在任何地方访问。
//在浏览器中，全局作用域是指在全局对象window 上定义的变量和函数，可以通过 window 对象来访问。


//详细解释：在 IIFE 中，为了避免变量和函数与全局作用域中的变量和函数发生冲突，通常将它们定义
//在函数内部，形成一个私有作用域。但有时候需要将一些变量或函数暴露给全局作用域，以便在其他地方调用。
//这可以通过将它们赋值给全局对象的属性来实现。
//总结：
//总之，将变量或函数赋值给全局对象的属性，可以将它们暴露给全局作用域，从而在其他地方访问它们