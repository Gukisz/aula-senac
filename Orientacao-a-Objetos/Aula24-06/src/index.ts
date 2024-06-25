const rl = require('readline-sync');

class Student {
    name: string;
    grades: number[];

    constructor(name: string) {
        this.name = name;
        this.grades = [];
    }

    addGrades(): void {
        const grade1 = rl.questionInt("Primeira nota: ");
        const grade2 = rl.questionInt("Segunda nota: ");
        const grade3 = rl.questionInt("Terceira nota: ");
        this.grades.push(grade1, grade2, grade3);
    }

    calculateAverage(): number {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}


let studentName = rl.question("Qual o nome do aluno? ");
let student = new Student(studentName);

student.addGrades();
console.log(`A média das notas de ${studentName} é ${student.calculateAverage()}`);
