var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [2, 4],
  ["n", 4],
  [7, 7],
  [4, 1]


]

let outputs = [
  14,
  8,
  undefined,
  49,
  4
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  if(typeof arr[0] !== "number" || typeof arr[1] !== "number"){
    return undefined;
  }else{
    return arr[0] * arr[1];
   }
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
