
//typeof  返回基本类型字符串以及function
//instanceof 检测实例的

// 判断数组
function _isArray(o) {
    return Object.prototype.toString.call(o);
}
console.log(_isArray([]));//[object Array]
console.log(Array.isArray([]));
