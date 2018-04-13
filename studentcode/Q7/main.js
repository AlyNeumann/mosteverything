var won = false;
var lost = false;
var body = document.getElementById("main");
var text = document.getElementById("text");
var start = document.getElementById("startButton");
var restart = document.getElementById("restartButton");

var newButtons = [];
var buttons = randomNumber(1,10);
var clickedButtons = 0;

// start.style.display = "";
// restart.style.display = "";

function ifLost(){
    if(won === false){
        lost = true;
        text.innerText = "You loooooose!!! LOSER!!!!";
    }
}

function ifWon(){
    if(lost === false){
        won = true;
        text.innerText = "About time we had a win around here...";
    }
}
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function createButton(){
    var newButton = document.createElement("button");
    
    newButton.style.position = "absolute";
    newButton.style.top = Math.floor((Math.random() * 230) + 1) + "px";
    newButton.style.left = Math.floor((Math.random() * 200)+ 1) + "px";
    newButton.innerText = "Click me";
    body.appendChild(newButton);
    newButton.addEventListener("click", () => {
        event.stopPropagation();
        clickedButtons++;
        newButton.style.display = "none";
        if(clickedButtons === buttons){
            ifWon()
        }
    })
}

function startGame(){
    
    text.innerText = "The games have begun."
    for(var i = 0; i < buttons; i++){
        createButton();
    }
    newButtons.forEach(button => button.style.display = "");
    body.addEventListener("click", () => {ifLost()})
    
    setTimeout(ifLost, 10000 * buttons);
}
start.addEventListener("click", () => {setTimeout(startGame, Math.random() * 2000 + 1000)})
restart.addEventListener("click", () => {location.reload()})