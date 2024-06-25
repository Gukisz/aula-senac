var rl = require('readline-sync');
var Teacher = /** @class */ (function () {
    function Teacher(name, age, exp_year) {
        this.name = name;
        this.age = age;
        this.exp_year = exp_year;
    }
    return Teacher;
}());
var School = /** @class */ (function () {
    function School(teacher, school_name, school_adress, num_adress) {
        this.teacher = teacher;
        this.school_name = school_name;
        this.school_adress = school_adress;
        this.num_adress = num_adress;
    }
    return School;
}());
function createProfessor() {
    console.log("Professor criado com sucesso!");
}
function createSchool() {
    console.log("Escola criada com sucesso!");
}
function modifyTeacher() {
    console.log("Professor modificado com sucesso!");
}
function modifySchool() {
    console.log("Escola modificada com sucesso!");
}
function visualizeProfessor() {
    console.log("Dados do professor:");
}
function visualizeSchool() {
    console.log("Dados da escola:");
}
function mainMenu() {
    var running = true;
    while (running) {
        console.log("\nMenu Principal:");
        console.log("1. Criar Professor");
        console.log("2. Criar Escola");
        console.log("3. Modificar Professor");
        console.log("4. Modificar Escola");
        console.log("5. Visualizar Professor");
        console.log("6. Visualizar Escola");
        console.log("7. Sair");
        var choice = rl.question('Escolha uma opção: ');
        switch (choice) {
            case '1':
                createProfessor();
                break;
            case '2':
                createSchool();
                break;
            case '3':
                modifyTeacher();
                break;
            case '4':
                modifySchool();
                break;
            case '5':
                visualizeProfessor();
                break;
            case '6':
                visualizeSchool();
                break;
            case '7':
                running = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida! Por favor, escolha uma opção válida.");
                break;
        }
    }
}
mainMenu();
