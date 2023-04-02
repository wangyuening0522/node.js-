var myModule=myModule||{};
//在该模式中，每个模块对应一个命名空间（namespace），模块中的属性和方法都定义在该命名空间的内部。
myModule.namespace=(function()
{
    var privateVar='I am private';
    function privateFunc()
    {
        console.log('This is a private function');
    }
    //私有部分和公共部分之间通过闭包的方式实现了隔离，避免了命名冲突和全局污染等问题。
    return {
        publicVar:'i am public',
        publicFunc:function()
        {
            console.log('this is a public function');
            privateFunc();
        }
    }
})();//函数模块调用
myModule.namespace.publicFunc();
//模块的属性和方法都被包含在命名空间中，不会与其他模块和全局作用域产生冲突
//为了避免这些问题，可以使用 Namespace 模式来实现 JavaScript 的模块化。在 Namespace 模式中，
//每个模块对应一个命名空间，模块中的属性和方法都定义在该命名空间的内部，不会对全局作用域产生影响。
//不同的模块可以定义不同的命名空间，避免了命名冲突的问题。

