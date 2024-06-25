var rl = require('readline-sync');
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.grades = [];
    }
    Student.prototype.addGrades = function () {
        var grade1 = rl.questionInt("Primeira nota: ");
        var grade2 = rl.questionInt("Segunda nota: ");
        var grade3 = rl.questionInt("Terceira nota: ");
        this.grades.push(grade1, grade2, grade3);
    };
    Student.prototype.calculateAverage = function () {
        if (this.grades.length === 0)
            return 0;
        var sum = this.grades.reduce(function (total, grade) { return total + grade; }, 0);
        return sum / this.grades.length;
    };
    return Student;
}());
var studentName = rl.question("Qual o nome do aluno? ");
var student = new Student(studentName);
student.addGrades();
console.log("A m\u00E9dia das notas de ".concat(studentName, " \u00E9 ").concat(student.calculateAverage()));
