var won = false;
var lost = false;
var body = document.getElementById("main");
var text = document.getElementById("text");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");


var newButtons = [];
var buttons = 5;
var clickedButtons = 0;

buttonOne.style.display = "";
buttonTwo.style.display = "";

function createButton(){
    var newButton = document.createElement("button");
    newButton.style.display = "";
    newButton.style.position = "absolute";
    newButton.style.top = Math.floor((Math.random() * 230) + 1) + "px";
    newButton.style.left = Math.floor((Math.random() * 200)+ 1) + "px";
    newButton.innerText = "Click me";
    newButton.addEventListener("click", () => {
        event.stopPropagation();
        clickedButtons++;
        newButton.style.display = "none";
        if(clickedButtons === buttons){
            ifWon();        }
    })
    newButtons.push(newButton);
    body.appendChild(newButton);
}



function ifLost(){
    if(won === false){
        lost = true;
        text.innerText = "You lost...";
    }
}

function ifWon(){
    if(lost === false){
        won = true;
        text.innerText = "You won!";
    }
}


function startGame(){
    text.innerText = "Game has started";

for(var i = 0; i < buttons; i++){
    createButton();
}
    newButtons.forEach(button => {
        button.style.display = "";
    })
    body.addEventListener("click", () => {ifLost()})

    setTimeout(ifLost, 3000);
 
}

buttonOne.addEventListener("click", () => {setTimeout(startGame, Math.random() * 2000 + 1000)})
buttonTwo.addEventListener("click", () => {location.reload()})

