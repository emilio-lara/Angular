"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Jedi(target, key) {
    var propertyValue = key;
    if (key) {
        Object.defineProperty(target, key, {
            get: function () {
                return propertyValue;
            },
            set: function (newValue) {
                propertyValue = newValue;
                console.log(propertyValue + " is a Jedi");
            }
        });
    }
}
var Character = /** @class */ (function () {
    function Character() {
        this.name = '';
    }
    __decorate([
        Jedi
    ], Character.prototype, "name", void 0);
    return Character;
}());
var character = new Character();
character.name = 'Luke';
function NameChanger(callbackObject) {
    return function (target, key) {
        var propertyValue = key;
        if (key) {
            Object.defineProperty(target, key, {
                get: function () {
                    return propertyValue;
                },
                set: function (newValue) {
                    propertyValue = newValue;
                    callbackObject.changeName.call(this, propertyValue);
                }
            });
        }
    };
}
var Character2 = /** @class */ (function () {
    function Character2() {
        this.name = '';
    }
    __decorate([
        NameChanger({
            changeName: function (newValue) {
                console.log("You are now known as " + newValue);
            }
        })
    ], Character2.prototype, "name", void 0);
    return Character2;
}());
var character2 = new Character2();
character2.name = 'Anakin';
function Log() {
    return function (target, propertyKey, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function newFunc() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = oldMethod.apply(this, args);
            console.log(propertyKey + " is called with " + args.join(', ') + " and result " + result);
            return result;
        };
    };
}
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.join();
    };
    __decorate([
        Log()
    ], Hero.prototype, "attack", null);
    return Hero;
}());
var hero = new Hero();
hero.attack();
