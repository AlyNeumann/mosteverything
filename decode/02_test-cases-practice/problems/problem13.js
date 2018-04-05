var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "madamimadam",
  "eye",
  "racebar",
  "racecar",
  "ahhhhhhhhhhh"
]

let outputs = [
  "madamimadam",
  "eye",
  "rabecar",
  "racecar",
  "hhhhhhhhhhha"
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    var newStr = str.split('').reverse().join(''); 
    console.log(newStr);
    if(newStr === str){
        return true;
    }

}


// function f(str){
//     var newStr = str.length;
//     console.log(newStr);
//     for (var i = str.length; i > 0; i--) {
//       if (str[i] !== str[newStr - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }




function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    console.log(expected);
    var actual = f(inputs[i]);
    console.log(actual);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

