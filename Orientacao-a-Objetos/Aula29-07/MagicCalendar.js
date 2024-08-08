var Dates = /** @class */ (function () {
    function Dates(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Dates.prototype.compare = function (otherDate) {
        if (this.year !== otherDate.getYear()) {
            return this.year - otherDate.getYear();
        }
        if (this.month !== otherDate.getMonth()) {
            return this.month - otherDate.getMonth();
        }
        return this.day - otherDate.getDay();
    };
    Dates.prototype.getDay = function () {
        return this.day;
    };
    Dates.prototype.getMonth = function () {
        return this.month;
    };
    Dates.prototype.getMonthExtended = function () {
        var months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return months[this.month - 1];
    };
    Dates.prototype.getYear = function () {
        return this.year;
    };
    Dates.prototype.isBissextile = function () {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    };
    Dates.prototype.clone = function () {
        return new Dates(this.day, this.month, this.year);
    };
    return Dates;
}());
var date1 = new Dates(29, 7, 2024);
var date2 = date1.clone();
console.log(date1.getMonthExtended()); // Julho
console.log(date1.isBissextile()); // true
console.log(date1.compare(date2)); // 0
