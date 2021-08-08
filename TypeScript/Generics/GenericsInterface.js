var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.area = function () { return 1; };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.area = function () { return 2; };
    return Circle;
}());
function allAreas() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    args.forEach(function (x) {
        total += x.area();
    });
    return total;
}
console.log(allAreas(new Square(), new Circle()));
