"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Banana(target) {
    target.prototype.banana = function () {
        console.log("We have bananas homes!");
    };
}
var FruitBasket = /** @class */ (function () {
    function FruitBasket() {
    }
    FruitBasket = __decorate([
        Banana
    ], FruitBasket);
    return FruitBasket;
}());
var basket = new FruitBasket(); // It will need the type any other wise will not compile
basket.banana();
function Banana2(message) {
    return function (target) {
        target.prototype.banana2 = function () {
            console.log(message);
        };
    };
}
// Extending a class decorator
var FruitBasket2 = /** @class */ (function () {
    function FruitBasket2() {
    }
    FruitBasket2 = __decorate([
        Banana2("We have mas bananas!")
    ], FruitBasket2);
    return FruitBasket2;
}());
var basket2 = new FruitBasket2();
basket2.banana2();
