registerPaint('smooth-corners', class {

	static get inputProperties() {
		return [
			'--smooth-corners',
			'--smooth-corners-bg-color',
			'--smooth-corners-border-color',
			'--smooth-corners-border-size'
		]
	}
  paint(ctx, size, styleMap) {
		
    ctx.fillStyle = styleMap.get('--smooth-corners-bg-color').toString()
		ctx.strokeStyle = styleMap.get('--smooth-corners-border-color').toString()
		const border_size = styleMap.get('--smooth-corners-border-size').toString()
		ctx.lineWidth = border_size
    if( border_size)
		  ctx.translate( border_size, border_size );

		const exp = styleMap.get('--smooth-corners').toString()
    // n=4 draw a squircle
    const n = exp

    let m = n
    if (n > 100) m = 100
    if (n < 0.00000000001) m = 0.00000000001
    const r = size.width / 2 - border_size
    const w = size.width / 2 - border_size
    const h = size.height / 2 - border_size

    ctx.beginPath();

    for (let i = 0; i < (2*r+1); i++) {
      const x = (i-r) + w 
      const y = (Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(i-r),m)),1/m)) + h

      if (i == 0)
        ctx.moveTo(x, y)
      else
        ctx.lineTo(x, y)
    }

    for (let i = (2*r); i < (4*r+1); i++) {
      const x = (3*r-i) + w
      const y = (-Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(3*r-i),m)),1/m)) + h
      ctx.lineTo(x, y)
    }
		
    ctx.closePath()
    ctx.fill()
    if( border_size)
		  ctx.stroke()
  }
})