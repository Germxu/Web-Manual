/** 
 * 迭代协议 迭代器
 * 
 */

const url = "a=bmw&b=audi&c=mercedes";
let val = new URLSearchParams(url).values();
// for (const iterator of val) { 
//     console.log(iterator);
// }

// console.log(1, ...val);
console.log(2, val.next());
console.log(2, val.next());
console.log(2, val.next());
console.log(2, val.next());

// console.log([...'1654165']);
var slc = {a:2,c:3,d:4,e:5};

console.log([...Object.keys(slc)]);

