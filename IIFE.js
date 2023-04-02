//immediately invoked function expression
//iife是一种立即执行的函数表达式，通常用来创建js模块或私有作用域
(function(){
    //code
})();
//在该示例代码中，定义了一个匿名函数，并将其用一对括号包裹起来。这样就创建了一个立即执行的函数表达式。
//通过使用 IIFE 模式，可以避免在全局作用域中声明过多的变量和函数，从而提高代码的可维护性和复用性



//闭包
//例子1
function outerFunc()
{
    var outerVar='I am outer';
    //内部函数
    function innerFunc()
    {
        console.log('Outer variable is:'+outerVar);
    }
    //返回内部函数的引用
    return innerFunc;
}
var inner=outerFunc();
inner();
//内部函数可以访问外部函数中的outervar
//外部函数返回了内部函数的引用 eg：inner()


//什么叫做引用
//函数作为一个对象，可以作为值来传递
//如果一个函数返回了另一个函数的引用，那么这个返回值是一个（内部）函数，可以向其他函数一样调用，这就叫做（内部）函数的引用
//例子2：
function add(x)
{
    return function(y)
    {
        return x+y;
    }
}
var add5=add(5);//返回function(y){return 5+y}
console.log(add5(3));//返回return 5+3=8需要传入两个参数，
//分别对应x和y，先传入x后传入y,用一个变量接收add函数才可以有机会传入第二个参数
console.log(add(10)(2));
//也可以直接传入两个参数
//好处：
//通过这种方式，可以创建一个带有“记忆效应”的函数，并且可以在不同的上下文中使用它。这种技术也称为“闭包”，因为内部函数可以访问外部函数的变量和参数，即使外部函数已经执行完毕。