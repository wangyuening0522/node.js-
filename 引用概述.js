//函数和参数都是对象，可以作为值来传递
//参数被函数引用时，传递的是参数对象的引用（指针），而不是参数对象本身的值
//意味着，在函数中对参数对象进行的任何更改都会反应在原始对象上
//类型1：按引用传递/传递引用（指针）
//对象指针传递
function change(obj2)
{
    //在函数中，给 obj 对象添加了一个名为 prop 的新属性，并将其赋值为 'new value'。
    //而并非传入obj对象
    //相当于两个指针指向同一块内存区域，操作obj2就相当于操作obj1
    obj2.prop='new value';
}
var obj1={prop:'old value'};
change(obj1);
console.log(obj1.prop);
//函数的引用指的是函数本身作为一个值来传递，可以在函数赋值给一个变量或对象属性
//类型2：传递函数引用（将函数作为值赋值给变量）
function add(x,y)
{
  return x+y;
}
function substract(x,y)
{
    return x-y;
}
var math={
    add:add,//将函数赋值给变量（对象的属性），函数被作为值传递
    sub:substract
    //，将这两个函数赋值给一个对象 math 的属性，从而创建了一个包含这两个函数的对象。
};
console.log(math.add(2,3));
console.log(math.sub(5,2));
//总结：总之，参数被函数引用是指传递的是参数对象的引用，而不是对象本身的值。
//函数的引用指的是将函数本身作为一个值来传递，可以将函数赋值给变量或对象属性，并将其作为参数传递给其他函数。