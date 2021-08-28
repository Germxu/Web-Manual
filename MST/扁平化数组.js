let a=[1,2,3,[4,5,[6,7,[8,9]]]];
function flat(value,arr){
    if(Array.isArray(value)){
        value.forEach(item=>{
            flat(item,arr);
        });
    }else{
        arr.push(value);
    }
}
let b=[];
flat(a,b)


let a1=[1,2,3,[4,5,[6,7,[8,9]]]];
a1.toString().split(',').map(item=>{
    return parseFloat(item);
});

let a2=[1,2,3,[4,5,[6,7,[8,9]]]];
let d=JSON.parse("["+JSON.stringify(a2).replace(/[[\]]/g,'').split(",")+"]")
console.log(d);
