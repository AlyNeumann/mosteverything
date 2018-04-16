
// This sectin contains some game constants. It is not super interesting
//TO DO - Timer - needs to stop when you DIE... Need Toonie Counter!
//add music, whistle, and applause 
//can you restart round without reloading page?
var GAME_WIDTH = 1125;
var GAME_HEIGHT = 749;

var ENEMY_WIDTH = 75;
var ENEMY_HEIGHT = 156;
var MAX_ENEMIES = 3;

var TOONIE_WIDTH = 75;
var TOONIE_HEIGHT = 74;
var MAX_TOONIES = 1;

var PLAYER_WIDTH = 150;
var PLAYER_HEIGHT = 283;

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';


var reload = document.getElementById('reload');
var song = new Audio('JELLYROLL_MASTER.mp3');
var toonieAudio = new Audio('toonieS.mp3');
var policeAudio = new Audio('policeS.mp3');
var lostAudio = new Audio('youLoseS.mp3');
var wonAudio = new Audio('youWinS.mp3');
var timer = undefined;
var rainAudio = new Audio('rain.mp3');
var lives = 3;

//isplayerdead? lives--
// if lives = 0, fillText....

function playSong() {
    song.play();
}

function songStop() {
    song.pause()
}

function rainSound() {
    rainAudio.play();
}

function toonieSound() {
    toonieAudio.play();
}

function policeSound() {
    policeAudio.play();
}

function youLoseAudio() {
    lostAudio.play();
}

function youWinAudio() {
    wonAudio.play();
}



var images = {};
['Policeman.png', 'SaintCatherine.jpg', 'TylerSizedR.png', 'toonie.png'].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});







// This section is where you will be doing most of your coding
class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}

class Enemy extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images['Policeman.png'];

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }


}

class Toonie extends Entity {
    constructor(xPos) {
        super();
        this.x = xPos;
        this.y = -TOONIE_HEIGHT;
        this.sprite = images['toonie.png'];

        // Each enemy should have a different speed
        this.speed = Math.random() / 2 + 0.25;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }


}

class Player extends Entity {
    constructor() {
        super();
        this.x = PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.sprite = images['TylerSizedR.png'];
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
    }


}





/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        playSong();

        // Setup enemies, making sure there are always three
        this.setupEnemies();
        this.setupToonies();

        reload.addEventListener("click", () => {
            location.reload();
        })


        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    setupToonies() {
        if (!this.toonies) {
            this.toonies = [];
        }
        while (this.toonies.filter(e => !!e).length <= MAX_TOONIES) {
            this.addToonie();
        }
    }

    addToonie() {
        var toonieSpots = GAME_WIDTH / TOONIE_WIDTH;

        var toonieSpot;
        while (!toonieSpot && this.toonies[toonieSpot]) {
            toonieSpot = Math.floor(Math.random() * toonieSpots);
        }
        this.toonies[toonieSpot] = new Toonie(toonieSpot * TOONIE_WIDTH);
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_WIDTH;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (!enemySpot && this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }

        this.enemies[enemySpot] = new Enemy(enemySpot * ENEMY_WIDTH);
    }

    countDown() {
        this.sec = 60;
        function action() {
            if (this.sec > 0) {

                this.sec = this.sec - 1;
            }
        }
        action = action.bind(this);
        action();
        this.timer = setInterval(action, 1000);
    }


    makeItRain() {
        var md = 100;
        var drops = [];

        //loop through empty drops & apply attributes

        for (var i = 0; i < md; i++) {
            drops.push({
                x: Math.random() * GAME_WIDTH,
                y: Math.random() * GAME_HEIGHT,
                r: Math.random() * 2 + 2,
                s: Math.random() + 1
            })
        }

        //draw rain onto canvas

        function drawDrops(ctx) {
            // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.fillStyle = '#9eb4d8';
            ctx.beginPath();
            for (var i = 0; i < md; i++) {
                var d = drops[i];
                ctx.moveTo(d.x, d.y);
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2, true);

            }
            ctx.fill();
            moveDrops();
        }
        var angle = 0;

        function moveDrops() {
            angle += 0.01;
            for (var i = 0; i < md; i++) {
                var d = drops[i];

                d.y += Math.pow(d.s, 2) + 1;
                d.x += Math.sin(angle);

                if (d.y > GAME_HEIGHT) {
                    drops[i] = { x: Math.random() * GAME_WIDTH, y: 0, r: d.r, s: d.s }
                }
            }
        }
        setInterval(() => drawDrops(this.ctx), 100);

    }



    // This method kicks off the game
    start() {
        this.score = 0;
        this.toonieCount = 0;
        this.lastFrame = Date.now();
        this.lives = 3;

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                this.player.move(MOVE_RIGHT);
            }

        });


        this.countDown();
        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {

        // Check how long it's been since last frame

        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;
        



        // Call update on all enemies
        this.enemies.forEach(enemy => enemy.update(timeDiff));
        this.toonies.forEach(toonie => toonie.update(timeDiff));

        // Draw everything!
        this.ctx.drawImage(images['SaintCatherine.jpg'], 0, 0); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.player.render(this.ctx); // draw the player
        this.toonies.forEach(toonie => toonie.render(this.ctx));

        this.ctx.fillText("You have " + this.sec + " seconds to make money!", 650, 30);

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupEnemies();

        // Check if toonies should disappear 

        this.toonies.forEach((toonie, toonieIdx) => {
            if (toonie.y > GAME_HEIGHT) {
                delete this.toonies[toonieIdx];
            }
        })
        this.setupToonies();

        //Check if toonie is caught
        if (this.isToonieCaught()) {

            this.ctx.font = 'bold 30px Righteous';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.strokeStyle = 'black';
            // this.ctx.fillText('You are ' + this.toonieCount + ' toonies richer!', 30, 60);
            this.toonieCount++;
            toonieSound();
            console.log("TOONIE CAUGHT", this.toonieCount)

        }


        // Check if player is dead
        if(this.isPlayerDead()){
            console.log(this.lives)
            this.lives--
            policeSound()
            if ( this.lives === 0) {
                console.log("HERE WE SHOULD END THE GAME")
                // this.lives--
                policeSound();
                youLoseAudio();
                this.makeItRain()
                rainSound();
                songStop();
                this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
                this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
                
                clearInterval(this.timer);
                // If they are dead, then it's game over!
                this.ctx.font = 'bold 30px Righteous';
                this.ctx.strokeStyle = 'black';
                this.ctx.fillStyle = '#ffffff';
                this.ctx.fillText(this.score + ' game over....time to get a real job!', 5, 30);
                this.ctx.fillText('You made $' + this.toonieCount * 2 + '.00!', 30, 60);
                gameEngine.restart()
            // }else if(this.isPlayerDead()){
            //     policeSound();
            //     delete this.enemies[i];
                
            }
        }
        if (this.sec === 0) {
            this.ctx.font = 'bold 30px Righteous';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.strokeStyle = 'black';
            this.ctx.fillText(this.score, 5, 30);
            this.ctx.fillText('You made $' + this.toonieCount * 2 + '.00! Nice playing!', 30, 60);    
        }
        else {

            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Righteous';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.strokeStyle = 'black';
            this.ctx.fillText(this.score, 5, 30);
            this.ctx.fillText('You have ' + this.lives +' lives', 700, 60);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }

    isToonieCaught() {
        const hasCollided = (toonie, player) => {
            if (player.y - TOONIE_HEIGHT < toonie.y && (player.x === toonie.x || player.x === toonie.x - 75)) {
                return true;
            }
            return false;
        }
        var caughtToonie = this.toonies.some((e) => hasCollided(e, this.player))


        this.toonies && this.toonies.forEach((e, i) => hasCollided(e, this.player) && delete this.toonies[i])


        return caughtToonie
    }


    isPlayerDead() {

        const hasCollided = (enemy,idx, player) => {


            if (player.y - ENEMY_HEIGHT < enemy.y && (player.x === enemy.x || player.x === enemy.x - 75)) {
                delete this.enemies[idx];
                return true;
                console.log("enemy collision!")
            }
            return false

        }
        return this.enemies.some((e,idx) => hasCollided(e, idx, this.player)) 
    }
}



// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();