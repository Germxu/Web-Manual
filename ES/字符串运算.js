// eval(str)


const math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    'x': function (x, y) { return x * y },
    '÷': function (x, y) { return x / y }
};

const str = '3x5+6';
let arr =[];
for (let i = 0; i < str.length; i++) {

    // console.log('iterator', '+-x÷'.indexOf(str[i]), str[i]);
    if('+-x÷'.indexOf(str[i])<0){
        // console.log(str[i],Number(str[i]));
        arr.push(Number(str[i]))
    }else{
        arr.push(str[i])
    }
}
let math = 
console.log(arr);
