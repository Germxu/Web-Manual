function f(){
    const {name,age}= this
    console.log('函数f',arguments);
    console.log(name,age);
}

var j={name:"凯迪",age:12}

f.call(j,{a:3})
var a = f.bind(j,{a:2})
a()