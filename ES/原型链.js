
function b() {
    this.p = 1;
    this.p1 = 2;
}

var c = new b()
console.log(c._proto_,c.p);
console.log(b.prototype,b._proto_);



// 快手面试题
Function.prototype.a = () => alert(1)
Object.prototype.b = () => alert(2);
function A() {}
const a = new A();

a.a();   //1
a.b();   //2
// a.a()会报错，找不到所谓的a方法，a.b() // 2
// a是通过构造函数创建的实例，typeof a打印出来的是object类型。
// a.a()查找过程，先看a的实例上是否有a方法，结果没有，那顺着原型链往上找，
// a的隐式原型是构造函数A的显示原型，这个显示原型中没有构造函数中定义的a方法，
// 那么接着往上找，A显示原型的隐式原型就是Object的构造函数的显示原型。
/* 
Object.prototype.b = () => alert(2);
Function.prototype.a = () => alert(1)
function A() {}
var a = new A();
var c = ()=>{}; //如果c是一个函数，调用c.a（）时，会直接只用函数原型上的方法
console.log('11',a.b()); //2
console.log('22',c.a()); //1

*/
