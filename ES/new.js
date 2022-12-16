function isValid(s) {
    if(s.length % 2 > 0) return false
    // while(s.includes('[]')||s.includes('()')||s.includes('{}')){
    while(/\[\]|\(\)|\{\}/.test(s)){
      console.log("s: ", s);

        //重写上面的三行代码
        s=s.replace(/\[\]|\(\)|\{\}/g,'')
    }
    if(s.length>0) return false;
    return true
};

console.log(isValid('()[]{}'));