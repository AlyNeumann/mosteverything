var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [1, 2, 4],
  [2, 5],
  [1, 3, "a"],
  [],
  [4, 4, 4]
]

let outputs = [
  7,
  7, 
  4,
  0,
  12
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/



const newArr = inputs;
function f(a, b) {
    return a + b;
    console.log(newArr.reduce(a));
}
// const add = function(a,b){
//     return a + b
// }
// console.log(newArr.reduce(a));

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
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

