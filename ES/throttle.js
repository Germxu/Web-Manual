function throttle(fn, interval) {
    let enterTime = 0;
    const gap = interval || 300;
    return function () {
        const context = this;
        const backTime = Date.now();
        if (backTime - enterTime > gap) {
            fn.call(context, arguments);
            enterTime = backTime;
        }
    }
}


function throttle(fn, ts) {
    let t = 0;
    return function () {
        let context = this;
        const times = Date.now();
        if (times - t > ts) {
            fn.call(context, arguments);
            t = times;
        }
    }
}

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {            
            fn.call(this, arguments)
        }, delay);
    }
}


setInterval(() => {
    console.log('1');

    debounce(function () {
        console.log('debounce');
    }, 500)()
}, 700)