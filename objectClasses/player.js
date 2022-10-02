class Player {
    constructor () {
        this.time = 1800
        this.posx = 80
        this.posy = 80
        this.symbol = "@"
        this.exist = true
        this.health = 100
        this.keys = {w: false, s: false, a: false, d: false,}
        this.collisionPart = {top: false, down: false, right: false, left: false}
    }
    Draw (x,y) {
        if (this.exist == true) {
            c.fillStyle = pallete[0]
            c.fillRect(this.posx,this.posy,size,size)
            c.font = size+"px Courier"
            c.fillStyle = pallete[1]
            c.fillText(this.symbol,this.posx,this.posy+14)
        }
    }
    Move () {
        if (this.exist == true){    
            if (this.keys.w == true) {this.posy-=steps;
                this.keys.w = false
                this.collisionPart.top = true
                this.collisionPart.down = false
                this.collisionPart.left = false
                this.collisionPart.right = false
            }
            if (this.keys.s == true) {this.posy+=steps;
                this.keys.s = false
                this.collisionPart.top = false
                this.collisionPart.down = true
                this.collisionPart.left = false
                this.collisionPart.right = false
            }
            if (this.keys.a == true) {this.posx-=steps;
                this.keys.a = false
                this.collisionPart.top = false
                this.collisionPart.down = false
                this.collisionPart.left = true
                this.collisionPart.right = false
            }
            if (this.keys.d == true) {this.posx+=steps;
                this.keys.d = false
                this.collisionPart.top = false
                this.collisionPart.down = false
                this.collisionPart.left = false
                this.collisionPart.right = true
            }
        }
    }
    Dead () {
        if (player.health <= 0) {
            player.exist = false
            player.health = 0
            player.time = 0
        }
    }
}