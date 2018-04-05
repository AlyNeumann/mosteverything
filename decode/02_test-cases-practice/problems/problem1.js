var assert = require('assert');


// we need 5 test cases. I provided 1 input
let inputs = [
  "",
  "a",
  "hello",
  "soooo",
  "bye"
]

let outputs = [
  undefined,
  "a",
  "h",
  "s",
  "b"
  
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
    return str[0];
}

function runTest(i) {
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



