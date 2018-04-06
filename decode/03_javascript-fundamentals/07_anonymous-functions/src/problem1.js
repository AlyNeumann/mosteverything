// fix all the errors

function c(g, h) {
    var x = g(6);
    var y = h(8);
     return [x, y];
}

function t() {

    return c(function (x) {return x + 1;}, function (y) {return y * 2;})
}
// return c((function (x) {return y + 1;}), (function (y) {return y * 2;}));
// var y = 8;
// var x = 6;
// (function(){
//     return (function(x){return y + 1}), (function (y){return x * 2});
// }
//  (function(g,h){
//     return [x, y];
//  }))


module.exports = t;
