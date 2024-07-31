import * as readlineSync from 'readline-sync';
import { GameLibrary } from './GameLibrary';
import { ElectronicGame, BoardGame } from './Game';

function main(): void {
    const library: GameLibrary = new GameLibrary();

    while (true) {
        try {
            console.clear();
            console.log('\nSistema de Gerenciamento de Jogos');
            console.log('1. Adicionar Jogo Eletrônico');
            console.log('2. Adicionar Jogo de Tabuleiro');
            console.log('3. Remover Jogo');
            console.log('4. Listar Jogos');
            console.log('5. Sair');
            const option = readlineSync.question('Escolha uma opção: ');

            switch (option) {
                case '1':
                    const titleElectronic = readlineSync.question('Título: ');
                    const genreElectronic = readlineSync.question('Gênero: ');
                    const ageGroupElectronic = readlineSync.questionInt('Classificação Etária: ');
                    const platform = readlineSync.question('Plataforma: ');
                    const electronicGame = new ElectronicGame(titleElectronic, genreElectronic, ageGroupElectronic, platform);
                    library.addGames(electronicGame);
                    console.log('Jogo Eletrônico adicionado com sucesso!');
                    break;

                case '2':
                    const titleBoardGame = readlineSync.question('Título: ');
                    const genreBoardGame = readlineSync.question('Gênero: ');
                    const ageGroupBoardGame = readlineSync.questionInt('Classificação Etária: ');
                    const playersNumber = readlineSync.questionInt('Número de Jogadores: ');
                    const boardGame = new BoardGame(titleBoardGame, genreBoardGame, ageGroupBoardGame, playersNumber);
                    library.addGames(boardGame);
                    console.log('Jogo de Tabuleiro adicionado com sucesso!');
                    break;

                case '3':
                    const removeTitle = readlineSync.question('Título do jogo a ser removido: ');
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
        } catch (error) {
            console.error('Ocorreu um erro:', error.message);
        }

        readlineSync.question('Pressione <ENTER> para continuar');
    }
}

main();