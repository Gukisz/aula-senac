var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Data = /** @class */ (function () {
    function Data(year, month, day, hour, minute) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
    }
    Data.prototype.toString = function () {
        return "".concat(this.year, "-").concat(this.month, "-").concat(this.day, " ").concat(this.hour, ":").concat(this.minute);
    };
    return Data;
}());
var Flight = /** @class */ (function () {
    function Flight(flightNumber, date) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.seats = new Array(100).fill(false);
    }
    Flight.prototype.nextFree = function () {
        for (var i = 0; i < this.seats.length; i++) {
            if (!this.seats[i]) {
                return i + 1;
            }
        }
        return -1; // Retorna -1 se não tiver assentos liberados
    };
    Flight.prototype.check = function (seat) {
        if (seat < 1 || seat > 100) {
            throw new Error("Número de Assento invalido");
        }
        return this.seats[seat - 1];
    };
    Flight.prototype.occupies = function (seat) {
        if (seat < 1 || seat > 100) {
            throw new Error("Número de Assento invalido");
        }
        if (this.seats[seat - 1]) {
            return false; // o assento ja está ocupado
        }
        this.seats[seat - 1] = true;
        return true; // o assento foi ocupado com sucesso
    };
    Flight.prototype.vacancies = function () {
        return this.seats.filter(function (seat) { return !seat; }).length;
    };
    Flight.prototype.getFlightNumber = function () {
        return this.flightNumber;
    };
    Flight.prototype.getDate = function () {
        return this.date;
    };
    Flight.prototype.clone = function () {
        var clonedFlight = new Flight(this.flightNumber, this.date);
        clonedFlight.seats = __spreadArray([], this.seats, true);
        return clonedFlight;
    };
    return Flight;
}());
// Exemplo de uso sem o readline sync 
var flightDate = new Data(2024, 7, 31, 10, 30);
var flight = new Flight("A319", flightDate);
console.log(flight.nextFree());
console.log(flight.occupies(1));
console.log(flight.check(1));
console.log(flight.vacancies());
console.log(flight.getFlightNumber());
console.log(flight.getDate().toString());
