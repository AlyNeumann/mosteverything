var won = false;
var lost = false;
var body = document.getElementById("main");
var text = document.getElementById("text");
var button = document.getElementById("button");

function ifLost(){
    if(won === false){
        lost = true;
        text.innerText = "You lost bud."
    }
}

function ifWon(){
    if(lost === false){
        won = true;
        text.innerText = "You win cool guy!"
    }
}

button.addEventListener("click", ()=> {
    button.style.display = "none";
    // startGame();
    setTimeout(startGame, Math.random() * 2000 + 1000)
})


function startGame(){
    text.innerText = "Game has started!";
    body.addEventListener("click",() => ifWon());

    body.addEventListener("keydown", (x) =>{
             var keyName = x.key;
             if(keyName === " "){
                 ifWon();
                }    
    })
    body.removeEventListener("click", ifWon, false);
    body.removeEventListener("keydown", ifWon, false);
    setTimeout(ifLost, 500)
}

