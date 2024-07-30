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
    private seats: boolean[] = Array(100).fill(false);

    constructor(private numeroVoo: string, private data: Data) {}

    nextFree(): number {
        for (let i = 0; i < this.seats.length; i++) {
            if (!this.seats[i]) {
                return i + 1;
            }
        }
        return -1;  // Retorna -1 se não tiver assentos liberados
    }

    check(chair: number): boolean {
        if (chair < 1 || chair > 100) {
            throw new Error("Número de Assento invalido");
        }
        return this.seats[chair - 1];
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

    getFly(): string {
        return this.numeroVoo;
    }

    getData(): Data {
        return this.data;
    }

    clone(): Flight {
        const clonedFlight = new Flight(this.numeroVoo, this.data);
        clonedFlight.seats = [...this.seats];
        return clonedFlight;
    }
}

// Example usage
const flightDate = new Data(2024, 10, 21, 15, 30);
const flight = new Flight("MG1234", flightDate);

console.log(flight.nextFree());  
console.log(flight.occupies(1));
console.log(flight.check(1));    
console.log(flight.vacancies()); 
console.log(flight.getFly());    
console.log(flight.getData().toString());

const clonedFlight = flight.clone();
console.log(clonedFlight.getFly()); 
console.log(clonedFlight.getData().toString()); 
console.log(clonedFlight.check(1));
console.log(clonedFlight.vacancies()); 
