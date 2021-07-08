//实现promise
// 三状态 Pending、Resolve、Reject
// 在 new Promise 时需要传入一个函数, 参数为 resolve 和 reject 的函数，用来改变 Promise 的状态

// 学习
function amIPassed(score) {
    return new Promise((resolve, reject) => {
        score >= 60 ? resolve() : reject()
    })
}

amIPassed(59).then(() => {
    console.log('Passed!')
}).catch(() => {
    console.log('No!')
})


console.log('1');
new Promise((resolve, reject) => {
    console.log('3');
    resolve(5)
    reject(6)
}).then(res => {
    console.log(res);
    resolve(23)
}).then(res => {
    console.log(res);

})
console.log('2');
