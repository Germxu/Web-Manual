
function b() {
    this.p = 1;
    this.p1 = 2;
}

var c = new b()
console.log(c._proto_,c.p);
console.log(b.prototype,b._proto_);
