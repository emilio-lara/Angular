function sayHello(name) {
    return 'Hello, ' + name;
}
//calling function sayHello
console.log("Priting Function return out put");
console.log(sayHello("Peter Pan"));
var sayHello2 = function (name) {
    return 'Hello, ' + name;
};
console.log("Printing Function assigned to a const");
console.log(sayHello2("Michel Jackson"));
var sayHello3 = function (name) {
    return 'Hello, ' + name;
};
console.log("Printing lambda assigned to a constant");
console.log(sayHello3("Pedro El Escamoso"));
//Optional Parameters
function greetMe(name, greeting) {
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ' , ' + name;
}
console.log("Printing optional parameters");
console.log(greetMe("Edurdo"));
function greetMe2(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return greeting + ", " + name;
}
console.log("Printing Parameter part2");
console.log(greetMe2("Fernado"));
console.log(greetMe2("Fernado", "Welcome"));
//Rest Parameters
function greetPeople(greeting, names) {
    return greeting + ', ' + names.join(' and ') + '!';
}
var array = ["Maria", "Perla", "Yolanda", "Blanca", "Siquiel"];
console.log(greetPeople("Hello", array));
