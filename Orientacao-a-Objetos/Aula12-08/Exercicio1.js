var readline = require('readline-sync');
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.reset = function () {
        this.count = 0;
    };
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.value = function () {
        return this.count;
    };
    return Counter;
}());
var counter = new Counter();
function showMenu() {
    console.log("\n    1. Mostrar valor atual\n    2. Incrementar contador\n    3. Resetar contador\n    4. Sair\n    ");
    var option = readline.question('Escolha uma opção: ');
    handleMenuOption(option);
}
function handleMenuOption(option) {
    switch (option) {
        case '1':
            console.log("Valor Atual: ".concat(counter.value()));
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
