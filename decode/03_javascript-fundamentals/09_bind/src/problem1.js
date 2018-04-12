var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}
// bind greet to bob

greet = greet.bind(bob);
// bob.name = bob.name.bind(bob);
// let bobBound = bob.name.bind(bob);

module.exports = greet;