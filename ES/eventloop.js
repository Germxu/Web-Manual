console.log('1');
setTimeout(() => {
    console.log('7');
});
new Promise((resolve, reject) => {
    console.log(2);
    resolve(3)
}).then(res => {
    console.log(4);
    return new Promise((resolve, reject) => {
        console.log(5);
        // resolve(9)
        reject(8)
    }).then(res => {
        console.log(res, 666);
    },err=>{
        console.log('reject catch',err);
    })
})
console.log('6');
