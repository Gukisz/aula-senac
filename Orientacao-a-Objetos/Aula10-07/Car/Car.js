"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(consume) {
        this.consume = consume;
        this.fuelLevel = 0;
    }
    Car.prototype.walk = function (distance) {
        var fuelRequired = distance / this.consume;
        if (fuelRequired <= this.fuelLevel) {
            this.fuelLevel -= fuelRequired;
        }
        else {
            throw new Error("Combustível insuficiente para percorrer a distância desejada.");
        }
    };
    Car.prototype.getFuel = function () {
        return this.fuelLevel;
    };
    Car.prototype.addFuel = function (amount) {
        this.fuelLevel += amount;
    };
    return Car;
}());
exports.Car = Car;
