let j = {
    a:[2,[23]],
    b:null,
    c:false,
    d:NaN,
    e:()=>{return 3}
}
let s = JSON.stringify(j)
console.log(s,"\n",JSON.parse(s) );
