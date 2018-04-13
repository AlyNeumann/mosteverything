//make players move or bounce, make background change, more sound effects!

var won = false;
var lost = false;

var body = document.getElementById("main");
var text = document.getElementById("text");
var restart = document.getElementById('button');

var audio = new Audio('bang.mp3');

var song = new Audio('Chopin.mp3');

playSong();

function songStop(){
    song.pause()
    /*
    if(keyCode === 32){

    }*/
}


function playAudio(){
audio.play();
}

function playSong(){
    song.play();
}

function ifLost(player){
    if(won === false){
        lost = true;
        text.innerText = "You lose " + player;
    }
}

function ifWon(player){
    if(lost === false){
        won = true;
        text.innerText = "You win " + player;
    }
}

function startGame(){
    text.innerText = "The game has started boys!";
    playAudio();
    document.addEventListener("keydown", (event) => {
        var keyCode = event.keyCode;
        if(keyCode === 81){
            ifWon("unicorn!!!") 
        }else if(keyCode === 80){
           ifWon("cupcake!!!");
        }else if(keyCode !== 80 || keyCode !== 81){
            return ifLost("")
;        }
    })
}

setTimeout(startGame, ((Math.random() * 6) + 2) * 1000);






