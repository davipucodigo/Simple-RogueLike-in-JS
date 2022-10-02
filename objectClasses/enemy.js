class Enemy {
    constructor (symbol) {
        this.posx = 0
        this.posy = 0
        this.time = 0
        this.symbol = symbol
        this.exist = true
        this.keys = {w: false, s: false, a: false, d: false,}
    }
    Draw (x,y) {
        if (this.exist == true) {
            c.fillStyle = pallete[0]
            c.fillRect(this.posx+x*size,this.posy+y*size,size,size)
            c.font = size+"px Courier"
            c.fillStyle = pallete[2]
            c.fillText(this.symbol,this.posx+x*size,this.posy+16+y*size)
        }
    }
    Move () { // Opicional, bem opcional. 
        if (this.keys.w == true) {this.posy-=steps;}
        if (this.keys.s == true) {this.posy+=steps;}
        if (this.keys.a == true) {this.posx-=steps;}
        if (this.keys.d == true) {this.posx+=steps;}
    }
}