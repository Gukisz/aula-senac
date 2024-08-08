class Data {
    constructor(
        public year: number,
        public month: number,
        public day: number,
        public hour: number,
        public minute: number
    ) {}
    
    toString(): string {
        return `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}`;
    }
}

class Flight {
    private seats: boolean[];

    constructor(private flightNumber: string, private date: Data) {
        this.seats = new Array(100).fill(false);
    }

    nextFree(): number {
        for (let i = 0; i < this.seats.length; i++) {
            if (!this.seats[i]) {
                return i + 1;
            }
        }
        return -1;  // Retorna -1 se não tiver assentos liberados
    }

    check(seat: number): boolean {
        if (seat < 1 || seat > 100) {
            throw new Error("Número de Assento invalido");
        }
        return this.seats[seat - 1];
    }

    occupies(seat: number): boolean {
        if (seat < 1 || seat > 100) {
            throw new Error("Número de Assento invalido");
        }
        if (this.seats[seat - 1]) {
            return false;  // o assento ja está ocupado
        }
        this.seats[seat - 1] = true;
        return true;  // o assento foi ocupado com sucesso
    }

    vacancies(): number {
        return this.seats.filter(seat => !seat).length;
    }

    getFlightNumber(): string {
        return this.flightNumber;
    }

    getDate(): Data {
        return this.date;
    }

    clone(): Flight {
        const clonedFlight = new Flight(this.flightNumber, this.date);
        clonedFlight.seats = [...this.seats];
        return clonedFlight;        
    }
}

// Exemplo de uso sem o readline sync 
const flightDate = new Data(2024, 7, 31, 10, 30);
const flight = new Flight("A319", flightDate);

console.log(flight.nextFree());  
console.log(flight.occupies(1));
console.log(flight.check(1));    
console.log(flight.vacancies()); 
console.log(flight.getFlightNumber());    
console.log(flight.getDate().toString());
