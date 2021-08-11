let arr = [[23, 4], [2, 44, [5], 567, 4], [34, 687], 5];

let a = JSON.stringify(arr);
let b = arr.toString();
let c = JSON.parse("["+ JSON.stringify(arr).replace(/[\[\]]/g, '')+"]");


// console.log(a, '\n', b, '\n', c);
console.log(c);
