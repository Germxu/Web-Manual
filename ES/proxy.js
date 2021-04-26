/** 
 * proxy代理对象
*/


//数组proxy
let arr ={US:2}

let arrProxy = new Proxy(arr,{
    get(target,key,reciver){
        console.log('Get :',key);
        // return target[key]
        return Reflect.get(target,key)
    },
    set(target,key,value,reciver){
        console.log('Set :', key, value);
        return Reflect.set(target,key,value)
    },
    has(target,key){
        console.log('has: ' + key);
        return Reflect.has(target, key);
    },
    deleteProperty(target,key){
        return Reflect.deleteProperty(target,key)
    }
})
// let a = arrProxy[2]
// let b = arr[1]

// arrProxy.push(5) 
/*  数组对象的写操作实质上是多步操作
Get Arr: push
Get Arr: length
Set Arr: 3 5
Set Arr: length 4
 */

// console.log(arr,arrProxy);

// console.log("US" in arrProxy);
// console.log(Reflect.has(arrProxy,"U2S"));
console.log(delete arrProxy.US);
console.log(delete arrProxy.U);
