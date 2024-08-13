"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointEx = exports.PointXY = exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.setX = function (x) {
        this.x = x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.setY = function (y) {
        this.y = y;
    };
    Point2D.prototype.setCoordinates = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point2D.prototype.setByPoint = function (anotherPoint) {
        this.x = anotherPoint.getX();
        this.y = anotherPoint.getY();
    };
    Point2D.prototype.equals = function (anotherPoint) {
        return (anotherPoint.getX() === this.getX()) && (anotherPoint.getY() === this.getY());
    };
    Point2D.prototype.toString = function () {
        return "x: ".concat(this.x, ", y: ").concat(this.y);
    };
    /*
    A(x1, y1) B(x2, y2)

    d = √((x2 - x1)² + (y2 - y1)²)
    */
    Point2D.prototype.distance = function (anotherPoint) {
        var xDiff = anotherPoint.getX() - this.x;
        var yDiff = anotherPoint.getY() - this.y;
        return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); // usando o operador de exponenciação
    };
    Point2D.prototype.clone = function () {
        return new Point2D(this.x, this.y);
    };
    return Point2D;
}());
exports.Point2D = Point2D;
var PointXY = /** @class */ (function (_super) {
    __extends(PointXY, _super);
    function PointXY(x, y) {
        return _super.call(this, x, y) || this; // passando parâmetros para o construtor da classe base
    }
    return PointXY;
}(Point2D));
exports.PointXY = PointXY;
var PointEx = /** @class */ (function (_super) {
    __extends(PointEx, _super);
    function PointEx(anotherPoint) {
        return _super.call(this, anotherPoint.getX(), anotherPoint.getY()) || this; // passando as coordenadas do ponto existente
    }
    return PointEx;
}(Point2D));
exports.PointEx = PointEx;
var point1 = new Point2D(1, 2);
var point2 = new Point2D(3, 4);
console.log("Ponto1:", point1.toString());
console.log("Ponto2:", point2.toString());
console.log("Distancia entre o ponto 1 e o ponto 2:", point1.distance(point2));
var point1Clone = point1.clone();
console.log("Ponto 1 clonado:", point1Clone.toString());
console.log("Ponto 1 é igual ao ponto 2?", point1.equals(point2));
console.log("Ponto 1 é igual ao Ponto 1 clonado?", point1.equals(point1Clone));
var pointXY = new PointXY(5, 6);
console.log("PontoXY:", pointXY.toString());
var pointEx = new PointEx(point2);
console.log("PontoEx:", pointEx.toString());
