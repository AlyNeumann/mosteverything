var won = false;
var lost = false;

var body = document.getElementById("main");
var text = document.getElementById("text");

var audio = new Audio('bang.mp3');


function playAudio(){
audio.play();
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
            ifWon("player 1") 
        }else if(keyCode === 80){
           ifWon("player 2");
        }else if(keyCode !== 80 || keyCode !== 81){
            return ifLost("")
;        }
    })
}

setTimeout(startGame, ((Math.random() * 6) + 2) * 1000);

