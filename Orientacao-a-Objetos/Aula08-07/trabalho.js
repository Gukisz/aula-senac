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
var readlineSync = require("readline-sync");
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
    Game.prototype.getageGroup = function () {
        return this.ageGroup;
    };
    Game.prototype.setageGroup = function (ageGroup) {
        this.ageGroup = ageGroup;
    };
    return Game;
}());
var ElectronicGame = /** @class */ (function (_super) {
    __extends(ElectronicGame, _super);
    function ElectronicGame(title, genre, ageGroup, plataform) {
        var _this = _super.call(this, title, genre, ageGroup) || this;
        _this.plataform = plataform;
        return _this;
    }
    ElectronicGame.prototype.getPlataform = function () {
        return this.plataform;
    };
    ElectronicGame.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    ElectronicGame.prototype.getDetails = function () {
        return "".concat(this.getTitle(), " - ").concat(this.getGenre(), " - ").concat(this.getageGroup(), " anos - Plataforma: ").concat(this.plataform);
    };
    return ElectronicGame;
}(Game));
var BoardGame = /** @class */ (function (_super) {
    __extends(BoardGame, _super);
    function BoardGame(title, genre, ageGroup, playersNumber) {
        var _this = _super.call(this, title, genre, ageGroup) || this;
        _this.playersNumber = playersNumber;
        return _this;
    }
    BoardGame.prototype.getplayersNumber = function () {
        return this.playersNumber;
    };
    BoardGame.prototype.setplayersNumber = function (playersNumber) {
        this.playersNumber = playersNumber;
    };
    BoardGame.prototype.getDetails = function () {
        return "".concat(this.getTitle(), " - ").concat(this.getGenre(), " - ").concat(this.getageGroup(), " anos - Jogadores: ").concat(this.playersNumber);
    };
    return BoardGame;
}(Game));
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
function main() {
    var library = new GameLibrary();
    while (true) {
        console.clear();
        console.log('\nSistema de Gerenciamento de Jogos');
        console.log('1. Adicionar Jogo Eletrônico');
        console.log('2. Adicionar Jogo de Tabuleiro');
        console.log('3. Remover Jogo');
        console.log('4. Listar Jogos');
        console.log('5. Sair');
        var option = readlineSync.question('Escolha uma opção: ');
        switch (option) {
            case '1':
                var titleEletronic = readlineSync.question('Título: ');
                var genreEletronic = readlineSync.question('Gênero: ');
                var ageGroupEletronic = readlineSync.questionInt('Classificação Etária: ');
                var plataform = readlineSync.question('Plataforma: ');
                var eletronicGame = new ElectronicGame(titleEletronic, genreEletronic, ageGroupEletronic, plataform);
                library.addGames(eletronicGame);
                console.log('Jogo Eletrônico adicionado com sucesso!');
                break;
            case '2':
                var titleBoardGame = readlineSync.question('Título: ');
                var genreBoardGame = readlineSync.question('Gênero: ');
                var ageGroupBoardGame = readlineSync.questionInt('Classificação Etária: ');
                var playersNumbers = readlineSync.questionInt('Número de Jogadores: ');
                var boardGame = new BoardGame(titleBoardGame, genreBoardGame, ageGroupBoardGame, playersNumbers);
                library.addGames(boardGame);
                console.log('Jogo de Tabuleiro adicionado com sucesso!');
                break;
            case '3':
                var removeTitle = readlineSync.question('Título do jogo a ser removido: ');
                library.removeGames(removeTitle);
                console.log('Jogo removido com sucesso!');
                break;
            case '4':
                console.log('Lista de Jogos:');
                console.log(library.listGames());
                break;
            case '5':
                console.log('Saindo...');
                console.clear();
                return;
            default:
                console.log('Opção inválida. Tente novamente.');
                break;
        }
        readlineSync.question('`Pressione <ENTER> para continuar');
    }
}
main();
