var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.reset = function () {
        this.count = 0;
    };
    Counter.prototype.increment = function () {
        this.count += 5;
    };
    Counter.prototype.value = function () {
        return this.count;
    };
    return Counter;
}());
var counter = new Counter();
console.log('Valor Inicial:', counter.value());
counter.increment();
console.log('Valor após incremento:', counter.value());
counter.reset();
console.log('Valor depois do Reset:', counter.value());
