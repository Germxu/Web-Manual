let arr = [
    { a: 2 },
    { a: 12 },
    { a: 124 },
    { a: 22 },
    { a: 24 },
    { a: 14 },
]

let jsn = {
    a: 13,
    c: 23,
    d: 43,
    b: 323,
    e: 63,
}

// let s = arr.sort((a, b) => a.a - b.a)

let jsnArr = Object.keys(jsn).sort()
let newjsn = {};

for (const iterator in jsn) {
    console.log(iterator);    
}

jsnArr.forEach(element => {
    newjsn[element]=jsn[element]
});
console.log('newjsn',newjsn);
