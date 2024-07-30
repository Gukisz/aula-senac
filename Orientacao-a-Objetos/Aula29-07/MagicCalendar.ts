class Dates {
    private day: number;
    private month: number;
    private year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    compare(otherDate: Dates): number {
        if (this.year !== otherDate.getYear()) {
            return this.year - otherDate.getYear();
        }
        if (this.month !== otherDate.getMonth()) {
            return this.month - otherDate.getMonth();
        }
        return this.day - otherDate.getDay();
    }

    getDay(): number {
        return this.day;
    }

    getMonth(): number {
        return this.month;
    }

    getMonthExtended(): string {
        const months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return months[this.month - 1];
    }

    getYear(): number {
        return this.year;
    }

    isBissextile(): boolean {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    clone(): Dates {
        return new Dates(this.day, this.month, this.year);
    }
}

const date1 = new Dates(29, 7, 2024);
const date2 = date1.clone();

console.log(date1.getMonthExtended()); // Julho
console.log(date1.isBissextile());    // true
console.log(date1.compare(date2));  // 0
