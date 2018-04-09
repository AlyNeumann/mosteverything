// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {
    var onlyOdds = [];
    onlyOdds = lst.filter(x => {return x % 2 !== 0})
    return onlyOdds
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {
    var longs =[];
    longs = lst.filter(
        function(x) {
            return (x.length > 5)
        }
    )
    return longs;
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    var addHello = [];
    addHello = lst.map(x => {return "Hello " + x})
    return addHello;

    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}

function greetLong(lst) {

    var findFours = [];
    var greetFours = [];
    findFours = lst.filter(x => {return x.length >= 4})
    greetFours = findFours.map(x => {return "Hello " + x})
    return greetFours;

    
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    return lst.every(x => x.length >= 5)
    
    
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};
