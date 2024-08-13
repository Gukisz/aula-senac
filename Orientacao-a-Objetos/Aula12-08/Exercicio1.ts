class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    reset(): void {
        this.count = 0;
    }

    increment(): void{
        this.count += 5;
    }

    value(): number {
        return this.count;

    }
}

const counter = new Counter();

console.log('Valor Inicial:', counter.value());
counter.increment();
console.log('Valor após incremento:', counter.value());
counter.reset();
console.log('Valor depois do Reset:', counter.value())


