const obj = {a:1, b:3}
with(obj){
    console.log(a);
    console.log(b);
    console.log(c); //报错  c is not defined
}