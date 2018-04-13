//Not finished
var won = false;
var lost = false;

var body = document.getElementById("body");
var text = document.getElementById("text");
var button = document.getElementById("button");

button.style.display = "none";
button.style.top = Math.floor((Math.random() * 230) + 1) + "px";
button.style.left = Math.floor((Math.random() * 200)+ 1) + "px";



function ifWon(){
    if(!lost){
        won = true;
        text.innerText = "You win!"
    }
}

function ifLost(){
    if(!won){
        lost = true;
        text.innerText = "You lose!"
    }

}


function startGame(){
    text.innerText = "Game has started!";
    button.style.display = "";
    button.addEventListener("click",()=>{
        ifWon();
    })
    body.addEventListener("click", ()=> {
        ifLost();
        })
    setTimeout(ifLost, 1500);

}


setTimeout(startGame, Math.random() * 2000 + 1000);

// function startGame(){
//     text.innerText = "Game has started bud";
//     body.addEventListener("click",() => ifWon());

//     body.addEventListener("keydown", (x) =>{
//              var keyName = x.key;
//              if(keyName === " "){
//                  ifWon();
//                 }    
//     })
//     body.removeEventListener("click", ifWon, false);
//     body.removeEventListener("keydown", ifWon, false);
//     setTimeout(ifLost, 500)
// }





