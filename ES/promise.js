// ES5回调
setTimeout(function () {
    console.log('Hello'); // 1秒后输出"Hello"
    setTimeout(function () {
        console.log('Fundebug'); // 2秒后输出"Fundebug"
    }, 1000);
}, 1000);

// promise异步
let wait = new Promise(function (resolve, reject) {
    setTimeout(
        resolve
        , 1000);
})
wait.then(() => {
    console.log('resolve');
    return wait;
}).then(()=>{
    console.log('rejecet');
    
}).then(()=>{
    console.log('3');
    
})