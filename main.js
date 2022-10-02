// CANVAS
    const canvas = document.getElementById("cv")
    const c = canvas.getContext("2d")

// VARIABLES
    var pallete = ["black","white","red","yellow","lime"]
    var background = () => {
        c.fillStyle = pallete[0]
        c.fillRect(0,0,canvas.width,canvas.height)
    }
    
    var size = 16
    var steps = 16
    var speedGameEnemy = 400

// Objects

var hPotions = new healingPotion(20)
var enemyN = new Enemy("N")

var player = new Player()
var lvlword = new LevelWord()
lvlword.PushLevel(level1)
lvlword.PushLevel(level2)
lvlword.PushLevel(level3)
lvlword.PushLevel(level4)
lvlword.PushLevel(level5)
lvlword.PushLevel(level6)

// Elements html
    var HealthSpan = document.getElementById("valueH")
    var TimerSpan = document.getElementById("ValueT")
    function condicionalColorHealthAndTimer () {
        HealthSpan.innerText = player.health
        TimerSpan.innerText = player.time
        if (player.health > 50) {
            HealthSpan.style.color = pallete[4]
        }
        if (player.health <= 50 && player.health > 25){
            HealthSpan.style.color = pallete[3]
        }
        if (player.health <= 25) {
            HealthSpan.style.color = pallete[2]
        }
        if (player.time <= 30) {
            TimerSpan.style.color = pallete[2]
        }
        if (player.time > 30) {
            TimerSpan.style.color = pallete[1]
        }
    }

// AREA GAME
    function gamearea () {
        background()
        player.time-=1
        if (player.time <= 0) {
            player.health-=1
            player.time = 0
        }
        player.Dead()
        player.Draw()
        player.Move()
        if (lvlword.levelNumber == 4) {
            speedGameEnemy = 200
        }else {
            speedGameEnemy =  10
        }
        lvlword.RenderLevels()
        condicionalColorHealthAndTimer()

        requestAnimationFrame(gamearea)
    }gamearea()

// EVENTS
document.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
        case "w":
                player.keys.w = true
            break;
        case "s":
                player.keys.s = true
            break;
        case "a":
                player.keys.a = true
            break;
        case "d":
                player.keys.d = true
            break;

        case "ArrowUp":
                player.keys.w = true
            break;
        case "ArrowDown":
                player.keys.s = true
            break;
        case "ArrowLeft":
                player.keys.a = true
            break;
        case "ArrowRight":
                player.keys.d = true
            break;
        case "p": 
            player.posx =80
            player.posy=80
            player.time = 18000000
            player.health= 100
            player.exist = true
            lvlword.levelNumber=0
            break;
    }
})
