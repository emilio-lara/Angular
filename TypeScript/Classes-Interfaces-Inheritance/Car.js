var Car = /** @class */ (function () {
    function Car(isHybrid, color) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distanceRun = 0;
        this.color = color;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'Very low' : 'Too high';
    };
    Car.honk = function () {
        return 'HOOONK!';
    };
    Car.prototype.distance = function () {
        return this.distanceRun;
    };
    return Car;
}());
var myCar = new Car(true, 'Yellow');
console.log(myCar.getGasConsumption());
console.log(myCar.distance);
console.log(Car.honk()); // Do not need to use new to access a static function or variable
