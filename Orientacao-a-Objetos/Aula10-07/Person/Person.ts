export class Person {
    public name: string;
    public surname: string;
    public dadName: string;
    public momName: string;
    public rgNumber: string;
    public cpfNumber: string;
    public birthDate: Date;

    constructor(
        name: string,
        surname: string,
        dadName: string,
        momName: string,
        rgNumber: string,
        cpfNumber: string,
        birthDate: Date
    ) {
        this.name = name;
        this.surname = surname;
        this.dadName = dadName;
        this.momName = momName;
        this.rgNumber = rgNumber;
        this.cpfNumber = cpfNumber;
        this.birthDate = birthDate;
    }

    calculateAge(): number {
        const today = new Date();
        const age = today.getFullYear() - this.birthDate.getFullYear();
        const month = today.getMonth() - this.birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
            return age - 1;
        }
        return age;
    }

    showResponsible(): void {
        const age = this.calculateAge();
        if (age < 18) {
            console.log(`Responsáveis: Pai - ${this.dadName}, Mãe - ${this.momName}`);
        } else {
            console.log("Não é necessário responsável.");
        }
    }
}
