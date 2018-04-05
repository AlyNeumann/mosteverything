var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "these maracas are an awesome instrument",
    "dont touch them",
    "stop it",
    "learn how to play them",
    "like first you know"
]

let outputs = [
    "instrument",
    "touch",
    "stop",
    "learn",
    "first"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
// function f(str) {
//     str.sort(a, b){
//     
//     }   
// }


// function f(str) {
//     // create longestWord empty
//     var longestWord = '';
//     // create array with every word
//     var arr = str.split(' ')
//     /* arr = [
//         'these',
//         'maracas',
//         'are',
//         'an',
//         'awesome',
//         'instrument'
//     ]
//     */

//     // loop through all words in the sentence
//     for (var i = 0; i < arr.length; i++) {

//         console.log('_________________')
//         // checkIf we find a longer word than what we have
//         console.log('if "' + arr[i] + '" is longer or equal length to "' + longestWord + '"')
//         if (arr[i].length >= longestWord.length) {
//             // if yes, set longestWord as this new word
//             console.log('set longestWord as "' + arr[i] + '"')
//             longestWord = arr[i]
//         }
//     }
//     return longestWord
// }

function f(str){
    var longestWord = "";
    var arr = str.split(" ");
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length >= longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
//runTest(1);
//runTest(2);
//runTest(3);
//runTest(4);

