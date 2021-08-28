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


let a2=[1,2,3,[4,5,[6,7,[8,9]]]];
a2.toString().split(',').map(item=>{
    return parseFloat(item);
});

let a3=[1,2,3,[4,5,[6,7,[8,9]]]];
function des(arr){
    return JSON.parse("["+JSON.stringify(arr).replace(/[[\]]/g,"").split(",")+"]");
}

console.log(des(a3));
