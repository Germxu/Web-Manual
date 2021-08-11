/**
 * 暂时性死区: temporal dead zone，简称TDZ
 * 当程序的控制流程在新的作用域（module function 或 block
作用域）进行实例化时，在此作用域中用let/const声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区
* 影响语法: let、const、import、new class、typeof
*/

var a = 3;
{
    a = 5;
    console.log(a);
    let a = 8;
}
console.log(a);
