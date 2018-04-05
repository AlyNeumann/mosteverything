var assert = require('assert');
console.log("hello 3!");
// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [1, 6],
  [2, 4],
  [1, 5],
  [-34, "y"],
  [3, 22]
]

let outputs = [
  6,
  0,
  7,
  6,
  6,
  undefined,
  25
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
// function f(x) {
//     if(typeof x === "number" && typeof y === "number"){
//       return x + y;
//       console.log(x + y);
//     }else{
//       return undefined;
//     }
// }

function f(x,y){
  if(typeof x !== "number" || typeof y !== "number"){
    return undefined;
  }else{
    return x + y;
  }
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
runTest(5);
runTest(6);
