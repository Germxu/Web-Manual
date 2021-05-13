/**
 * 
 * forEach更多的用来遍历数组
 * for in 一般常用来遍历对象或json
 * for of 用来遍历数组非常方便且比较安全
 * for in循环出的是key，for of循环出的是value
 *   
 */

const json = {
    "a":1,
    "c":2,
    "b":3,
}
//for of 并不能直接使用在普通的对象上,需要通过和Object.keys()搭配使用
for (const iterator of Object.keys(json)) {
    console.log(iterator); //TypeError: json is not iterable
}

let arr = [1,2,3,4];
arr.b='100';
for(let key in arr){
    // arr.hasOwnproperty(key)
       console.log(key,arr.hasOwnProperty(key));//会把b输出来
   }