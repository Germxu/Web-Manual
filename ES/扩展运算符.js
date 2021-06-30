let j = {
    a: 2,
    b: 3,
    c: 4
}
let s = {
    ...j,
    a:888
}

j.a=3;

console.log(j,s);
