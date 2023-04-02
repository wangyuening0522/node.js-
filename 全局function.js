var myModule=(function(){
    //私有属性
    var privateVar='I am private';
    //私有方法
    function privateFunc(){
     console.log('this is a private function');
    }
    //私有属性和方法只能在模块内部使用，无法在模块外部直接访问
    //公共属性和方法则是可以在模块内外都能访问的属性和方法，通过将他们放在一个对象中并将对象返回，实现了在模块内外同时访问公共部分的效果
    //公共属性和方法可以访问私有属性方法，但是私有属性和方法不能被公共访问在实现模块化编程的同时，也保护了私有部分的安全性和独立性。
    return {
        publicVar:'I am public',
        publicFunc:function()
        {
            console.log('this is a public function');
            //可以访问私有函数
            privateFunc();
        }
    }
})();
myModule.publicFunc();
//myModule对象是一个全局函数模块,有返回值
//返回一个对象（包含一个公共属性和一个公共方法），由于对象在全局函数中定义，因此在函数外部也可以访问该对象
//全局函数会将模块的公共方法和属性暴露在全局作用域中，如果多个模块都定义了同名变量或函数，就会命名冲突
//另一方面，全局函数还可能污染全局作用域，因为全局函数中的变量和函数都可以被其他脚本文件或库所访问和修改，如果不加以限制，就可能会对全局作用域造成不必要的影响和副作用，导致代码难以维护和调试。