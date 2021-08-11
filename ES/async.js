
function ajax(){
  return "ajax"
}

async function test(){
  // await ajax();
  return 444
}

test().then(res=>{
  console.log(1,res);
})
console.log('22');
 