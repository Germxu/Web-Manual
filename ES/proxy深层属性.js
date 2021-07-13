let m = {
    a: 1,
    b: 2
}

let proxy = new Proxy(m, {
    get(target, key, reciver) {
        console.log('Get :', key);
        // return target[key]
        return Reflect.get(target, key)
    },
    set(target, key, value, reciver) {
        console.log('Set :', key, value);
        return Reflect.set(target, key, value)
    },
})

// proxy.a = 3
// // console.log('proxy',proxy);
// console.log('proxy', proxy, m);
// proxy.a.f = 4

// console.log('proxy', proxy, m);
// m.c = 5
proxy.c = {}
proxy.c.e = {e:777}
proxy.c.e.f = 888
console.log('proxy', proxy, m);
// proxy.c = 888
delete proxy.c.e.f
console.log('proxy', proxy, m);

//proxy 并不能代理深层次属性的操作, 只能响应到一级属性get的操作, 同样需要深度遍历