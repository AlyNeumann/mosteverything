var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["hey", 3],
  ["ho", 4],
  ["lets", 2],
  ["what", -2],
  ["you", -5],
  ["say", -3],
  ["go", 1]
]

let outputs = [
  "heyheyhey",
  "hohohoho",
  "letslets",
  undefined,
  undefined,
  undefined,
  "go"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
// function f(arr) {
//     var says = arr[0];
//     for(i = 0; i <= arr[1]; i++){
//         says = says + says[i];
//     } 
//     return says;
// }

// function f(arr){
//     if(arr[1] === "number"){
//         return arr[0] * arr[1];
//     }else{
//         return undefined;
//     }
// }

function f(arr){
    if(arr[1] >= 0){
        return arr[0].repeat(arr[1])
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
runTest(5);
runTest(6);

