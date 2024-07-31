"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var GameLibrary_1 = require("./GameLibrary");
var Game_1 = require("./Game");
function main() {
    var library = new GameLibrary_1.GameLibrary();
    while (true) {
        try {
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
                    var titleElectronic = readlineSync.question('Título: ');
                    var genreElectronic = readlineSync.question('Gênero: ');
                    var ageGroupElectronic = readlineSync.questionInt('Classificação Etária: ');
                    var platform = readlineSync.question('Plataforma: ');
                    var electronicGame = new Game_1.ElectronicGame(titleElectronic, genreElectronic, ageGroupElectronic, platform);
                    library.addGames(electronicGame);
                    console.log('Jogo Eletrônico adicionado com sucesso!');
                    break;
                case '2':
                    var titleBoardGame = readlineSync.question('Título: ');
                    var genreBoardGame = readlineSync.question('Gênero: ');
                    var ageGroupBoardGame = readlineSync.questionInt('Classificação Etária: ');
                    var playersNumber = readlineSync.questionInt('Número de Jogadores: ');
                    var boardGame = new Game_1.BoardGame(titleBoardGame, genreBoardGame, ageGroupBoardGame, playersNumber);
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
        }
        catch (error) {
            console.error('Ocorreu um erro:', error.message);
        }
        readlineSync.question('Pressione <ENTER> para continuar');
    }
}
main();
