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
        if (answer.length === 15 && /^[A-E]+$/.test(answer)) { // verifica se a resposta tem 15 caracteres
            this.studentAnswers = answer.split(''); // divide a string em um array tbm armazena a resposta
        } else {
            throw new Error("Formato da resposta inválido"); // da erro se o formato for invalido
        }   
    }

    hits(): number {
        let correctAnswers = 0; // inicia o contador    
        for (let i = 0; i < this.template.answers.length; i++) { // compara a resposta do template com a do estudante
            if (this.template.answers[i] === this.studentAnswers[i]) { 
                correctAnswers++; // incrementa se a resposta ta correta
            }
        }
        return correctAnswers; // retorna o as respostas corretas
    }

    grade(): number { // esse metodo repete a mesma lógica do metodo anterior com a diferença que ele calcula a pontuação do aluno o metodo anterior conta o numero de respostas corretas
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
        if (thisGrade > otherGrade) { // compara as notas
            return 1; // se a nota do exame atual for maior
        } else if (thisGrade < otherGrade) {
            return -1; // se a nota do outro exame for maior
        } else {
            return 0; // se as notas forem iguais
        }
    }
}

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
