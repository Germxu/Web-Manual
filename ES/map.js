let arr = [2, 3, 4, 5, 6];

let a2 = arr.map(i => {
    console.log(i);
    // if (i > 5) { break }
    return i * 3
})
console.log(a2,arr);
