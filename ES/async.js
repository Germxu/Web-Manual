async function t(){
    console.log('t');
    
  return 3
}
 
let  a =  t()
console.log(a)

async function test(){
  // await ajax();
  return 444
}

test().then(res=>{
  console.log(1,res);
})
console.log('22');
 
