var rand = (function(){
    var today = new Date(); 
    var seed = today.getTime();
    function rnd(){
      seed = ( seed * 9301 + 49297 ) % 233280;
      return seed / ( 233280.0 );
    };
    return function rand(number){
      return Math.ceil(rnd(seed) * number);
    };
  })();
   
  console.log(rand(100))