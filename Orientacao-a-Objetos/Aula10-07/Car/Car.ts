export class Car {
    public consume: number;
    public fuelLevel: number;

    constructor(consume: number) {
        this.consume = consume;
        this.fuelLevel = 0;
    }

    walk(distance: number): void {
        const fuelRequired = distance / this.consume;
        if (fuelRequired <= this.fuelLevel) {
            this.fuelLevel -= fuelRequired;
        } else {
            throw new Error("Combustível insuficiente para percorrer a distância desejada.");
        }
    }

    getFuel(): number {
        return this.fuelLevel;
    }

    addFuel(amount: number): void {
        this.fuelLevel += amount;
    }
}
