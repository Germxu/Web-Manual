var length = 5;
function fn() {
    console.log(this.length)
}
let obj = {
    length: 10,
    method: function (fn) {
        fn(); // 5 : this作用域在调用的环境不是声明环境
        fn.call(this); // 10 : 绑定当前执行环境
        console.log(arguments.length);
        
        arguments[0]();
    }
}
obj.method(fn,2,3,4)
