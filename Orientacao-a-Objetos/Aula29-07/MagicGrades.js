var StudentMagicDiscipline = /** @class */ (function () {
    function StudentMagicDiscipline(registration, name, testGrade1, testGrade2, workGrade) {
        this.registration = registration;
        this.name = name;
        this.testGrade1 = testGrade1;
        this.testGrade2 = testGrade2;
        this.workGrade = workGrade;
    }
    //Calcular a média das notas
    StudentMagicDiscipline.prototype.average = function () {
        return (this.testGrade1 + this.testGrade2) / 2;
    };
    //Calcular a nota final
    StudentMagicDiscipline.prototype.final = function () {
        return (this.testGrade1 + this.testGrade2 + this.workGrade) / 3;
    };
    return StudentMagicDiscipline;
}());
var student = new StudentMagicDiscipline(5555, "Gus Potter", 9.5, 8, 9);
console.log("M\u00E9dia: ".concat(student.average()));
console.log("Nota final: ".concat(student.final()));
