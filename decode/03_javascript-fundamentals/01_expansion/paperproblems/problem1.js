console.log("here we are expanding on a Saturday")

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
// console.log(square(decrement(square(decrement(3)))));

// var d = decrement(3);
// var s = square(d);
// var dTwo = decrement(s);
// var result = square(dTwo);

// console.log(result);

// #2
// console.log(decrement(decrement(square(square(3)))));

// var sq = square(3);
// var sqTwo = square(sq);
// var dec = decrement(sqTwo);
// var decTwo = decrement(dec);

// console.log(decTwo);

// #3
// console.log(duplicateString(reverseString("hello")));

// var reverse = reverseString("hello");
// var duplicate = duplicateString(reverse);

// console.log(duplicate);


// #4
console.log(reverseString(duplicateString(duplicateString("foo"))));

var dup = duplicateString("foo");
var dupTwo = duplicateString(dup);
var rev = reverseString(dupTwo);

console.log(rev);
