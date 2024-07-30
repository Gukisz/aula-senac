interface Student {
    registration: number;
    name: string;
    testGrade1: number;
    testGrade2: number;
    workGrade: number;
    average(): number;
    final(): number;
}

class StudentMagicDiscipline implements Student {
    registration: number;
    name: string;
    testGrade1: number;
    testGrade2: number;
    workGrade: number;

    constructor(registration: number, name: string, testGrade1: number, testGrade2: number, workGrade: number) {
        this.registration = registration;
        this.name = name;
        this.testGrade1 = testGrade1;
        this.testGrade2 = testGrade2;
        this.workGrade = workGrade;
    }

    //Calcular a média das notas
    average(): number {
        return (this.testGrade1 + this.testGrade2) / 2;
    }

    //Calcular a nota final
    final(): number {
        return (this.testGrade1 + this.testGrade2 + this.workGrade) / 3;
    }
}

const student = new StudentMagicDiscipline(5555, "Gus Potter", 9.5, 8, 9);
console.log(`Média: ${student.average()}`);
console.log(`Nota final: ${student.final()}`);
