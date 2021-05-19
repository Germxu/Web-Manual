//重新定义数组原型
const oldArrayProperty = Array.prototype;
//创建新对象, 原型指向oldArrayProperty, 在扩展新的方法不影响原型
['pop','push'].forEach(method=>{
    
})