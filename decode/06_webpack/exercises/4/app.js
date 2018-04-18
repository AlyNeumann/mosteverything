var oneLinerJoke = require('one-liner-joke');
var joke = oneLinerJoke.getRandomJoke();
// var joke = oneLinerJoke.getRandomJokeWithTag('music');
console.log(joke);
var rootDiv = document.getElementById("root");

function fillWithText(text) {
    return rootDiv.innerHTML = text;
}

fillWithText(joke.body);

