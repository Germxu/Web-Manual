// paintworklet.js

import SimplexNoise from 'simplex-noise';

const sim = new SimplexNoise(() => 1);

registerPaint('wave', class {

    static get inputProperties() {

        return ['--animation-tick'];

    }

    paint(ctx, geom, properties) {

        const tick = Number(properties.get('--animation-tick'));

        this.drawWave(ctx, geom, 'rgba(255, 255, 255, 0.4)', 0.004, tick, 15, 0.4);

        this.drawWave(ctx, geom, 'rgba(255, 255, 255, 0.5)', 0.006, tick, 12, 0.4);

    }

    /**
    
    * 绘制波纹
    
    */

    drawWave(ctx, geom, fillColor, ratio, tick, amp, ih) {

        const {

            width,

            height

        } = geom;

        const initY = height * ih;

        const speedT = tick * ratio;

        ctx.beginPath();

        for (let x = 0, speedX = 0; x <= width; x++) {

            speedX += ratio * 1;

            var y = initY + sim.noise2D(speedX, speedT) * amp;

            ctx[x === 0 ? 'moveTo' : 'lineTo'](x, y);

        }

        ctx.lineTo(width, height);

        ctx.lineTo(0, height);

        ctx.lineTo(0, initY + sim.noise2D(0, speedT) * amp);

        ctx.closePath();

        ctx.fillStyle = fillColor;

        ctx.fill();

    }

})