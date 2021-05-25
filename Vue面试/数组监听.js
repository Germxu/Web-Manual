//重新定义数组原型
const oldArrayProperty = Array.prototype;
//创建新对象, 原型指向oldArrayProperty, 在扩展新的方法不影响原型
const arrProto= Object.create(oldArrayProperty);
console.log(arrProto);


['pop','push'].forEach(method=>{
    arrProto[method]=function(){
        console.log('调用数组方法：'+method);
        
    }
})