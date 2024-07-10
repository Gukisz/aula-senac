export class Car {
    public consume: number;
    public fuelLevel: number;

    constructor(consume: number) {
        this.consume = consume;
        this.fuelLevel = 0;
    }

    walk(distance: number): boolean {
        const fuelRequired = distance / this.consume;
        if (fuelRequired <= this.fuelLevel) {
            this.fuelLevel -= fuelRequired;
            return true;
        }
        return false;
    }

    getFuel(): number {
        return this.fuelLevel;
    }

    addFuel(amount: number): void {
        this.fuelLevel += amount;
    }
}
