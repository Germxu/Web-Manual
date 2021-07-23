

new Promise(resolve => {
    resolve();

}).then(() => {
    console.log('out 1');

    return new Promise(resolve => {
        resolve();
    }).then(() => {
        console.log('inner 1');
    }).then(() => {
        console.log('inner 2');
    })

}).then(() => {
    console.log('out 2');
})