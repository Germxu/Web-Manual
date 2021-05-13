/** 
 * 迭代协议 迭代器
 * 
 */

const url = "a=bmw&b=audi&c=mercedes";
let val = new URLSearchParams(url).values();
//for of 并不能直接使用在普通的对象上,需要通过和Object.keys()搭配使用
// for (const iterator of val) { 
//     console.log(iterator);
// }

// console.log(1, ...val);
console.log(2, val.next());
console.log(2, val.next());
console.log(2, val.next());
console.log(2, val.next());


const json = {
    "a":1,
    "c":2,
    "b":3,
}
for (const iterator of json) {
    console.log(iterator);
    
}