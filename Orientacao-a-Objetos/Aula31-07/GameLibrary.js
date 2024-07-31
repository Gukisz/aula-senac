"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLibrary = void 0;
var GameLibrary = /** @class */ (function () {
    function GameLibrary() {
        this.games = [];
    }
    GameLibrary.prototype.addGames = function (jogo) {
        this.games.push(jogo);
    };
    GameLibrary.prototype.removeGames = function (title) {
        this.games = this.games.filter(function (game) { return game.getTitle() !== title; });
    };
    GameLibrary.prototype.listGames = function () {
        return this.games.map(function (game) { return game.getDetails(); }).join('\n');
    };
    return GameLibrary;
}());
exports.GameLibrary = GameLibrary;
