//递归
let a = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
function flat(value, arr) {
    if (Array.isArray(value)) {
        value.forEach(item => {
            flat(item, arr);
        });
    } else {
        arr.push(value);
    }
}
let b = [];
flat(a, b)

//转字符串
let a1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
a1.toString().split(',').map(item => {
    return parseFloat(item);
});


//正则
let a2 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
let d = JSON.parse("[" + JSON.stringify(a2).replace(/[[\]]/g, '').split(",") + "]")
//console.log(d);

//es6 flat(infinity) 
// arr.flat(infinity)


//reduce
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        console.log('pre', pre);

        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    },[])
}
let a3 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// console.log('reduce', flatten(a3));
//报错了


//扩展运算符

// while ()

let a4 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
function ft(arr){
    while(arr.some(Array.isArray)){
        arr=[].concat(...arr)
        // console.log('2',arr);
    }
    return arr
}
console.log(ft(a4));
