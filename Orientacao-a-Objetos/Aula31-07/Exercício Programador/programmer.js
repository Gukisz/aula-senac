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
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.work = function () {
        return "".concat(this.name, " est\u00E1 trabalhando.");
    };
    return Programmer;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name) {
        return _super.call(this, name) || this;
    }
    Junior.prototype.work = function () {
        return "".concat(this.name, " est\u00E1 resolvendo bugs.");
    };
    return Junior;
}(Programmer));
var MidLevel = /** @class */ (function (_super) {
    __extends(MidLevel, _super);
    function MidLevel(name) {
        return _super.call(this, name) || this;
    }
    MidLevel.prototype.work = function () {
        return "".concat(this.name, " est\u00E1 criando features.");
    };
    return MidLevel;
}(Programmer));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name) {
        return _super.call(this, name) || this;
    }
    Senior.prototype.work = function () {
        return "".concat(this.name, " est\u00E1 administrando a equipe.");
    };
    return Senior;
}(Programmer));
var DevCompany = /** @class */ (function () {
    function DevCompany() {
        this.programmers = [];
    }
    DevCompany.prototype.addProgrammer = function (programador) {
        this.programmers.push(programador);
    };
    DevCompany.prototype.working = function () {
        for (var _i = 0, _a = this.programmers; _i < _a.length; _i++) {
            var programmer = _a[_i];
            console.log(programmer.work());
        }
    };
    return DevCompany;
}());
var company = new DevCompany();
var junior = new Junior('Pedro');
var midLevel = new MidLevel('Richarlison');
var senior = new Senior('Samantha');
company.addProgrammer(junior);
company.addProgrammer(midLevel);
company.addProgrammer(senior);
company.working();
