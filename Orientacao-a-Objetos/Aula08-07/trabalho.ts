import * as readlineSync from 'readline-sync';

abstract class Game {
    private title: string;
    private genre: string;
    private ageGroup: number;

    constructor(title: string, genre: string, ageGroup: number) {
        this.title = title;
        this.genre = genre;
        this.ageGroup = ageGroup;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public getageGroup(): number {
        return this.ageGroup;
    }

    public setageGroup(ageGroup: number): void {
        this.ageGroup = ageGroup;
    }

    public abstract getDetails(): string;
}

class ElectronicGame extends Game {
    private plataform: string;

    constructor(title: string, genre: string, ageGroup: number, plataform: string) {
        super(title, genre, ageGroup);
        this.plataform = plataform;
    }

    public getPlataform(): string {
        return this.plataform;
    }

    public setPlataform(plataform: string): void {
        this.plataform = plataform;
    }

    public getDetails(): string {
        return `${this.getTitle()} - ${this.getGenre()} - ${this.getageGroup()} anos - Plataforma: ${this.plataform}`;
    }
}

class BoardGame extends Game {
    private playersNumber: number;

    constructor(title: string, genre: string, ageGroup: number, playersNumber: number) {
        super(title, genre, ageGroup);
        this.playersNumber = playersNumber;
    }

    public getplayersNumber(): number {
        return this.playersNumber;
    }

    public setplayersNumber(playersNumber: number): void {
        this.playersNumber = playersNumber;
    }

    public getDetails(): string {
        return `${this.getTitle()} - ${this.getGenre()} - ${this.getageGroup()} anos - Jogadores: ${this.playersNumber}`;
    }
}

class GameLibrary {
    private games: Game[] = [];

    public addGames(jogo: Game): void {
        this.games.push(jogo);
    }

    public removeGames(title: string): void {
        this.games = this.games.filter(game => game.getTitle() !== title);
    }

    public listGames(): string {
        return this.games.map(game => game.getDetails()).join('\n');
    }
}

function main(): void {
    const library: GameLibrary = new GameLibrary();
    
    while (true) {
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
                const titleEletronic = readlineSync.question('Título: ');
                const genreEletronic = readlineSync.question('Gênero: ');
                const ageGroupEletronic = readlineSync.questionInt('Classificação Etária: ');
                const plataform = readlineSync.question('Plataforma: ');
                const eletronicGame = new ElectronicGame(titleEletronic, genreEletronic, ageGroupEletronic, plataform);
                library.addGames(eletronicGame);
                console.log('Jogo Eletrônico adicionado com sucesso!');
                break;
            

            case '2':
                const titleBoardGame = readlineSync.question('Título: ');
                const genreBoardGame = readlineSync.question('Gênero: ');
                const ageGroupBoardGame = readlineSync.questionInt('Classificação Etária: ');
                const playersNumbers = readlineSync.questionInt('Número de Jogadores: ');
                const boardGame = new BoardGame(titleBoardGame, genreBoardGame, ageGroupBoardGame, playersNumbers);
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

        readlineSync.question('`Pressione <ENTER> para continuar');
    }
}

main();
