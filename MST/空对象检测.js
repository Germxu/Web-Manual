let a = {}
const b = Object.keys(a)

function isEmptyObj(obj) {
    return Object.keys(obj).length ? false : true;
}
function isEmptyObj2(obj) {
    return JSON.stringify(obj) === "{}" && Object.keys(obj).length ? false : true;
}
console.log(isEmptyObj2(a));



// getOwnPropertyNames 获取对象自身的属性
const a2 = new Object({a:2,c:3});
a2.__proto__.name="funxu";
// a2.prototype.skld="funxu";

console.log(Object.keys(a2),a2.name);
for(i in a2){
    console.log(i);
    
}
