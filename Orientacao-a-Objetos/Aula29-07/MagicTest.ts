interface Template {
    answers: string[];
}

class Proof {
    private template: Template;
    private studentAnswers: string[];

    constructor(template: Template) {
        this.template = template;
        this.studentAnswers = [];
    }

    answerStudent(answer: string): void {
        if (answer.length === 15 && /^[A-E]+$/.test(answer)) {
            this.studentAnswers = answer.split('');
        } else {
            throw new Error("Formato da resposta inválido");
        }
    }

    hits(): number {
        let correctAnswers = 0;
        for (let i = 0; i < this.template.answers.length; i++) {
            if (this.template.answers[i] === this.studentAnswers[i]) {
                correctAnswers++;
            }
        }
        return correctAnswers;
    }

    grade(): number {
        let score = 0;
        for (let i = 0; i < this.template.answers.length; i++) {
            if (this.template.answers[i] === this.studentAnswers[i]) {
                score += (i < 10) ? 0.5 : 1;
            }
        }
        return score;
    }

    greater(otherExam: Proof): number {
        const thisGrade = this.grade();
        const otherGrade = otherExam.grade();
        if (thisGrade > otherGrade) {
            return 1;
        } else if (thisGrade < otherGrade) {
            return -1;
        } else {
            return 0;
        }
    }
}

// Example usage:
const template: Template = { answers: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'] };
const studentExam1 = new Proof(template);
const studentExam2 = new Proof(template);

studentExam1.answerStudent('ABADAABEDEABCED');
studentExam2.answerStudent('AACDEAACDEDDCBA');

console.log('Estudante 1 Acertos:', studentExam1.hits());
console.log('Estudante 1 Nota:', studentExam1.grade());

console.log('Estudante 2 Acertos:', studentExam2.hits());
console.log('Estudante 2 Nota:', studentExam2.grade());

console.log('Comparação:', studentExam1.greater(studentExam2));
