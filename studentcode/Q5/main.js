var won = false;
var lost = false;
var body = document.getElementById("main");
var text = document.getElementById("text");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");

function ifLost(){
    if(won === false){
        lost = true;
        text.innerText = "You lost";
    }
}

function ifWon(){
    if(lost === false){
        won = true;
        text.innerText = "You won";
    }
}

buttonOne.addEventListener("click", () => {
    buttonOne.style.display = "none";
    setTimeout(startGame, Math.random() * 2000 + 1000)
})

buttonTwo.addEventListener("click", () => {
    buttonTwo.style.display = "none";
    location.reload();
})

function startGame(){
    text.innerText = "Game has started";
    body.addEventListener("click", () => ifWon());
    body.addEventListener("keydown", (x) => {
        var keyName = x.key;
        if(keyName === " "){
            ifWon();
        }
    })
    body.removeEventListener("click", ifWon, false);
    body.removeEventListener("keydown", ifWon, false);
    setTimeout(ifLost, 500)
}