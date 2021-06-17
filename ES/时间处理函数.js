
function hms2seconds(hms) {
    return hms.split(':').reduce((acc,time)=>(60*acc) + +time)
}

function seconds2hms(seconds) {
    return new Date(seconds*1000).toISOString().substr(11,8)
    
}


var a=hms2seconds('12:33:06');
// 45186
var b=seconds2hms(45186);
// "12:33:06"
console.log(a,b);
