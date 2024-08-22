const readline = require('readline-sync');

class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    public reset(): void {
        this.count = 0;
    }

    public increment(): void {
        this.count++;
    }

    public value(): number {
        return this.count;
    }
}

const counter = new Counter();

function showMenu(): void {
    console.log(`
    1. Mostrar valor atual
    2. Incrementar contador
    3. Resetar contador
    4. Sair
    `);

    const option = readline.question('Escolha uma opção: ');
    handleMenuOption(option);
}

function handleMenuOption(option: string): void {
    switch (option) {
        case '1':
            console.log(`Valor Atual: ${counter.value()}`);
            break;
        case '2':
            counter.increment();
            console.log('Contador incrementado.');
            break;
        case '3':
            counter.reset();
            console.log('Contador resetado.');
            break;
        case '4':
            console.log('Saindo...');
            process.exit();
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }

    showMenu();
}

showMenu();
