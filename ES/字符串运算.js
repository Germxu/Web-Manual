// eval(str)


const math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    'x': function (x, y) { return x * y },
    '÷': function (x, y) { return x / y }
};

const str = '3*5+6';

for (const i in str) {

    // console.log('iterator', i, str[i]);
    if(i){
        console.log(2,i);
    }

}
