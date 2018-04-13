var message = document.getElementById("message");
var body = document.getElementById("body");
var won = false;

body.addEventListener("click", () => {
    message.innerText = "You won!";
    won = true;
}
)
function ifLost(){
    if(won === false){
        message.innerText = "You lost!";
    }
}
setTimeout(ifLost, 1000);