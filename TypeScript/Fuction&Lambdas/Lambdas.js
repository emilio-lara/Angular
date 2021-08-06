//Arrow Functions simple
var double = function (x) { return x * 2; };
console.log("Printing Arrow functions");
console.log(double(5));
// Arrow Funtions with parametes
var add = function (x, y) { return x + y; };
console.log("Printing Arrow functions with parameters");
console.log(add(5, 4));
//Arrow Funtions with Statements
var addAndDouble = function (x, y) {
    var sum = x + y;
    return sum * 2;
};
console.log("Printing Arrow functions with parameter and statements");
console.log(addAndDouble(8, 9));
// Self Assigning
function delayedGreeting(name) {
    this.name = name;
    this.greet = function () {
        setTimeout(function () {
            console.log("Hello " + this.name);
        }, 0);
    };
    this.greet2 = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello " + _this.name);
        }, 0);
    };
}
console.log("Printing Self Assigning");
var greeting = new delayedGreeting('John');
greeting.greet();
greeting.greet2();
