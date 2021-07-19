let a = [1, 2, 3, 4, 5];
let b = a.filter(e => { return e })
let c = a.map(e => { return e*2 })

console.log(a, "\n", b,"\n",c, "\n", a == b);

let d = a.every(e=>{
    console.log(e);
    return e>2
    
})
console.log(d);
