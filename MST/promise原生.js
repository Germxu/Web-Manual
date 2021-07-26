new Promise((resolve, reject) => {
    console.log('promise 同步');
    setTimeout(() => {
        console.log('定时器');
        resolve();

    }, 500)
    reject()
}) 

let promise = new Promise()