var assert = require('assert');
console.log("hey there problem 2!");
// we need 5 test cases.
let inputs = [
    "",
    "well",
    "lets",
    "code",
    "everything"
]

let outputs = [
  undefined,
  "l",
  "s",
  "e",
  "g"
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    // return str.slice(-1);
    console.log(str);
    return str[str.length - 1];
}

function runTest(i) {
    var expected = outputs[i];
    console.log(expected);
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
