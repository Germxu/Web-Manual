function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    console.log(a,b);
    
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        console.log("c",~~a.pop() , ~~b.pop());
        
        // 取个位数
        res = c % 10 + res;
        // 判断是否有进位
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}

console.log(sumStrings("100000","226465"));
