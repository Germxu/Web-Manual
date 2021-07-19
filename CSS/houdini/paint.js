// paint.js
class paintCS {
    // 决定了paint方法中props中能获取的CSS属性值
    static get inputProperties() { return ['--color','width']; }
    

    // 绘制一个半径为长或宽的最小值的圆形作为背景
    // ctx是Canvas的ctx的子集，实现了除文字操作外的大多数方法和属性
    paint(ctx, size, props) {
        console.log('props',props);

        props.forEach(i=>{
            console.log('f props',i);
        })
        
        console.log(2,props.getAll("width"));
        

        // size表示使用该paint方法的div的长和宽
        const width = size.width / 2;
        const height = size.height / 2;
        const radius = Math.min(width, height);
        // props.get表示将根据inputProperties返回的键值从CSS代码块中获取相应属性
        const color = props.get('--color');
        // 给画笔着色
        ctx.fillStyle = color;
        // 开始动笔绘制
        ctx.beginPath();
        // 以width,height为圆心，radius为半径画圆圈,从0度画到360度
        ctx.arc(width, height, radius, 0, 2 * Math.PI);
        // 用fillstyle把圆圈轨迹内部进行颜色填充
        ctx.fill();
        // 搞定！
    }
}

registerPaint('circle', paintCS);
