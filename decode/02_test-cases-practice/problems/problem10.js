var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "i hate this construction",
  "when does it stop",
  "sawing and coding don't mix",
  "jesus lord",
  "make it stop"
]

let outputs = [
  "I Hate This Construction",
  "When Does It Stop",
  "Sawing And Coding Don't Mix",
  "Jesus Lord",
  "Make It Stop"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/


function f(str) {
    var newStr = "";
    var newArr = [];
    newArr = str.split(" ");
    // iterating over each word and replacing the first letter with a capitol
    for(var i = 0; i < newArr.length; i++){
        // newArr = [ 'I' , 'hate' , 'this' , 'construction']
        // newArr[0] = 'I'
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
    }
    newStr = newArr.join(" ");
    return newStr;
    console.log(newStr);
}

      

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

