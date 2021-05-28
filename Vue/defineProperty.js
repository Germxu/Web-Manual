//视图更新
function updateView(){
    console.log('视图更新');
}

//重新定义属性, 监听 就是把数据属性添加成为访问器属性

function defineReactive(target, key,value){

    //核心API
    Object.defineProperty(target,key,{
        get(){
            return value;
        },
        set(newValue){
            if(newValue!==value){
                //设置新值
                //注意, value 一直在闭包中, 此处设置完之后再get也是
            }
        }
    })
}