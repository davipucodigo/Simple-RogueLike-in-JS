class healingPotion {
    constructor (addHealthNumber) {
        this.exist = true
        this.posx = 0
        this.posy = 0
        this.symbol = "*"
        this.addHealth = addHealthNumber
    }
    Draw (x,y) {
        if (this.exist == true) {
            c.fillStyle = pallete[0]
            c.fillRect(this.posx+x*size,this.posy+y*size,size,size)
            c.font = size+"px Courier"
            c.fillStyle = pallete[4]
            c.fillText(this.symbol,this.posx+x*size,this.posy+16+y*size)
        }
    }
    Collision() {
        if (this.exist == true) {
            player.health += this.addHealth
            this.exist = false
        }
    }
}