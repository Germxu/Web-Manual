var a = 2;
var f = {
    a: "3",
    t: () => {
        console.log(this, a);
    }
}
var c = f.t;
c()
//闭包: 一个函数和它周围的状态的引用捆绑在一起的组合
