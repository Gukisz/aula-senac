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
var rl = require("readline-sync");
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
    Point2D.prototype.distance = function (anotherPoint) {
        var xDiff = anotherPoint.getX() - this.x;
        var yDiff = anotherPoint.getY() - this.y;
        return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
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
        return _super.call(this, x, y) || this;
    }
    return PointXY;
}(Point2D));
exports.PointXY = PointXY;
var PointEx = /** @class */ (function (_super) {
    __extends(PointEx, _super);
    function PointEx(anotherPoint) {
        return _super.call(this, anotherPoint.getX(), anotherPoint.getY()) || this;
    }
    return PointEx;
}(Point2D));
exports.PointEx = PointEx;
// Função para criar um novo ponto
function createPoint() {
    var x = rl.questionFloat('Digite o valor de x: ');
    var y = rl.questionFloat('Digite o valor de y: ');
    return new Point2D(x, y);
}
// Menu interativo
var point1 = createPoint();
var point2 = createPoint();
var option;
do {
    console.log('\nEscolha uma opção:');
    console.log('1 - Mostrar ponto 1');
    console.log('2 - Mostrar ponto 2');
    console.log('3 - Calcular a distância entre os pontos');
    console.log('4 - Clonar o ponto 1');
    console.log('5 - Verificar se os pontos são iguais');
    console.log('6 - Criar um novo PointXY');
    console.log('7 - Criar um novo PointEx baseado no ponto 2');
    console.log('8 - Sair');
    option = rl.questionInt('Opção: ');
    switch (option) {
        case 1:
            console.log('Ponto 1:', point1.toString());
            break;
        case 2:
            console.log('Ponto 2:', point2.toString());
            break;
        case 3:
            console.log('Distância entre o ponto 1 e o ponto 2:', point1.distance(point2));
            break;
        case 4:
            var point1Clone = point1.clone();
            console.log('Ponto 1 clonado:', point1Clone.toString());
            break;
        case 5:
            console.log('Ponto 1 é igual ao ponto 2?', point1.equals(point2));
            break;
        case 6:
            var pointXY = new PointXY(rl.questionFloat('Digite o valor de x para PointXY: '), rl.questionFloat('Digite o valor de y para PointXY: '));
            console.log('PontoXY:', pointXY.toString());
            break;
        case 7:
            var pointEx = new PointEx(point2);
            console.log('PontoEx baseado no ponto 2:', pointEx.toString());
            break;
        case 8:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            break;
    }
} while (option !== 8);
