function f(){
    console.log('函数f',this,arguments);
}
var a={x:2}
f.call(a,...[1,2,3])
// f(null)