import { Game } from './Game';
export class GameLibrary {
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
