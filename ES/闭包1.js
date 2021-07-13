var a = 2;
var f = {
    a: "3",
    t: () => {
        console.log(this, a);
    }
}
f.t()
//闭包: 一个函数和它周围的状态的引用捆绑在一起的组合

