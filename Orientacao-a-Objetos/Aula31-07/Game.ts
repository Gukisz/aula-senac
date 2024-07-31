export abstract class Game {
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

    public getAgeGroup(): number {
        return this.ageGroup;
    }

    public setAgeGroup(ageGroup: number): void {
        this.ageGroup = ageGroup;
    }

    public abstract getDetails(): string;
}

export class ElectronicGame extends Game {
    private platform: string;

    constructor(title: string, genre: string, ageGroup: number, platform: string) {
        super(title, genre, ageGroup);
        this.platform = platform;
    }

    public getPlatform(): string {
        return this.platform;
    }

    public setPlatform(platform: string): void {
        this.platform = platform;
    }

    public getDetails(): string {
        return `${this.getTitle()} - ${this.getGenre()} - ${this.getAgeGroup()} anos - Plataforma: ${this.platform}`;
    }
}

export class BoardGame extends Game {
    private playersNumber: number;

    constructor(title: string, genre: string, ageGroup: number, playersNumber: number) {
        super(title, genre, ageGroup);
        this.playersNumber = playersNumber;
    }

    public getPlayersNumber(): number {
        return this.playersNumber;
    }

    public setPlayersNumber(playersNumber: number): void {
        this.playersNumber = playersNumber;
    }

    public getDetails(): string {
        return `${this.getTitle()} - ${this.getGenre()} - ${this.getAgeGroup()} anos - Jogadores: ${this.playersNumber}`;
    }
}

