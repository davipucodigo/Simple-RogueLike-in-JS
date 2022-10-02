class LevelWord {
    constructor () {
        this.levelNumber = 0
        this.levels = []
    }
    PushLevel (levelArray) {
        this.levels.push(levelArray)
    }
    RenderLevels () {
        this.levelnow = this.levels[this.levelNumber]
        for (var y = 0; y < this.levelnow.length; y++) {
            for (var x = 0; x < this.levelnow[y].length; x++) {
                if (this.levelnow[y][x] == 1) {
                    c.font = size*"px Courier"
                    c.fillStyle = pallete[1]
                    c.fillText("|", x*size, y*size+16)
                }
                if (this.levelnow[y][x] == 2) {
                    c.font = size*"px Courier"
                    c.fillStyle = pallete[1]
                    c.fillText("-", x*size, y*size+16)
                }
                if (this.levelnow[y][x] == ">]") {
                    c.font = size*"px Courier"
                    c.fillStyle = pallete[1]
                    c.fillText("+", x*size, y*size+16)
                    if (player.posx+size > x*size && player.posx < x*size+16 && player.posy+size > y*size && player.posy < y*size+16) {
                        this.levelNumber+=1
                        hPotions.exist = true
                    }
                }
                if (this.levelnow[y][x] == "*") {
                    hPotions.Draw(x,y)
                    if (player.posx+size > hPotions.posx+x*size && player.posy+size > hPotions.posy+y*size && player.posx < hPotions.posx+x*size+16 && player.posy < hPotions.posy+y*size+16) {
                        hPotions.Collision()
                    }

                }
                if (this.levelnow[y][x] == "T") {
                        c.fillStyle = pallete[0]
                        c.fillRect(x,y,size,size)
                        c.font = size+"px Courier"
                        c.fillStyle = pallete[1]
                        c.fillText("End game",x+10,y+30)
                        c.fillText("Thanks for play",x+10,y+45)

                }
                if (this.levelnow[y][x] == "N") {
                    enemyN.Draw(x,y)
                    enemyN.time+=0.5
                    if (enemyN.time >= speedGameEnemy) { 
                        if (enemyN.posx+x*size < player.posx) {
                            enemyN.posx+=steps
                        }
                        if (enemyN.posx+x*size > player.posx) {
                            enemyN.posx-=steps
                        }
                        if (enemyN.posy+y*size < player.posy) {
                            enemyN.posy+=steps
                        }
                        if (enemyN.posy+y*size > player.posy) {
                            enemyN.posy-=steps
                        }
                        enemyN.time = 0
                    }
                        if (player.posx+size > enemyN.posx+x*size && player.posy+size > enemyN.posy+y*size && player.posx < enemyN.posx+x*size+16 && player.posy < enemyN.posy+y*size+16) {
                            console.log("Inimigo dano")
                            player.health-=1
                        }
                }

                if (this.levelnow[y][x] != 0 && this.levelnow[y][x] != ">]" && this.levelnow[y][x] != "N" && this.levelnow[y][x] != "*" && this.levelnow[y][x] != "T" ) {
                    /*c.fillStyle = pallete[2]
                    c.fillRect(x*size, y*size,size,size)*/
                    if (player.posx+size > x*size && player.posx < x*size+16 && player.posy+size > y*size && player.posy < y*size+16) {
                        console.log("Batata top")
                        if (player.collisionPart.top == true) {
                            player.posy+=16
                        }
                        if (player.collisionPart.down == true) {
                            player.posy-=16
                        }
                        if (player.collisionPart.right == true) {
                            player.posx-=16
                        }
                        if (player.collisionPart.left == true) {
                            player.posx+=16
                        }
                    }
                }
            }
        }
    }
}