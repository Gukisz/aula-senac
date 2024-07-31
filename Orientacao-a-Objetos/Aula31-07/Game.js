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
exports.BoardGame = exports.ElectronicGame = exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(title, genre, ageGroup) {
        this.title = title;
        this.genre = genre;
        this.ageGroup = ageGroup;
    }
    Game.prototype.getTitle = function () {
        return this.title;
    };
    Game.prototype.setTitle = function (title) {
        this.title = title;
    };
    Game.prototype.getGenre = function () {
        return this.genre;
    };
    Game.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Game.prototype.getAgeGroup = function () {
        return this.ageGroup;
    };
    Game.prototype.setAgeGroup = function (ageGroup) {
        this.ageGroup = ageGroup;
    };
    return Game;
}());
exports.Game = Game;
var ElectronicGame = /** @class */ (function (_super) {
    __extends(ElectronicGame, _super);
    function ElectronicGame(title, genre, ageGroup, platform) {
        var _this = _super.call(this, title, genre, ageGroup) || this;
        _this.platform = platform;
        return _this;
    }
    ElectronicGame.prototype.getPlatform = function () {
        return this.platform;
    };
    ElectronicGame.prototype.setPlatform = function (platform) {
        this.platform = platform;
    };
    ElectronicGame.prototype.getDetails = function () {
        return "".concat(this.getTitle(), " - ").concat(this.getGenre(), " - ").concat(this.getAgeGroup(), " anos - Plataforma: ").concat(this.platform);
    };
    return ElectronicGame;
}(Game));
exports.ElectronicGame = ElectronicGame;
var BoardGame = /** @class */ (function (_super) {
    __extends(BoardGame, _super);
    function BoardGame(title, genre, ageGroup, playersNumber) {
        var _this = _super.call(this, title, genre, ageGroup) || this;
        _this.playersNumber = playersNumber;
        return _this;
    }
    BoardGame.prototype.getPlayersNumber = function () {
        return this.playersNumber;
    };
    BoardGame.prototype.setPlayersNumber = function (playersNumber) {
        this.playersNumber = playersNumber;
    };
    BoardGame.prototype.getDetails = function () {
        return "".concat(this.getTitle(), " - ").concat(this.getGenre(), " - ").concat(this.getAgeGroup(), " anos - Jogadores: ").concat(this.playersNumber);
    };
    return BoardGame;
}(Game));
exports.BoardGame = BoardGame;
