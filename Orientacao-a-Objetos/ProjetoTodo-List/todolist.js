"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(description, priority) {
        if (priority === void 0) { priority = 0; }
        this.description = description;
        this.priority = priority;
        this.status = 'Pendente';
    }
    Task.prototype.displayInfo = function () {
        return "Tarefa: ".concat(this.description, ", Prioridade: ").concat(this.priority, ", Status: ").concat(this.status);
    };
    return Task;
}());
var TaskQueue = /** @class */ (function () {
    function TaskQueue() {
        this.tasks = [];
    }
    TaskQueue.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('Tarefa adicionada com sucesso!');
    };
    TaskQueue.prototype.removeTask = function () {
        if (this.tasks.length > 0) {
            var removedTask = this.tasks.shift();
            console.log('Tarefa removida:', removedTask === null || removedTask === void 0 ? void 0 : removedTask.description);
            return removedTask || null;
        }
        else {
            console.log('Nenhuma tarefa na fila.');
            return null;
        }
    };
    TaskQueue.prototype.listTasks = function () {
        if (this.tasks.length > 0) {
            console.log('Tarefas na fila:');
            this.tasks.forEach(function (task, index) {
                console.log("".concat(index + 1, ". ").concat(task.displayInfo()));
            });
        }
        else {
            console.log('Nenhuma tarefa na fila.');
        }
    };
    TaskQueue.prototype.taskCompleted = function () {
        if (this.tasks.length > 0) {
            this.tasks[0].status = 'Concluída';
            console.log("Tarefa \"".concat(this.tasks[0].description, "\" foi marcada como conclu\u00EDda."));
        }
        else {
            console.log('Nenhuma tarefa na fila.');
        }
    };
    return TaskQueue;
}());
var readlineSync = require("readline-sync");
function interactiveMenu() {
    var queue = new TaskQueue();
    var option = '';
    while (option !== '5') {
        console.log('\n--- Menu To-Do List ---');
        console.log('1. Adicionar tarefa');
        console.log('2. Remover tarefa');
        console.log('3. Listar tarefas');
        console.log('4. Marcar tarefa como concluída');
        console.log('5. Sair');
        option = readlineSync.question('Escolha uma opção: ');
        switch (option) {
            case '1':
                var description = readlineSync.question('Descrição da tarefa: ');
                var priority = readlineSync.questionInt('Prioridade da tarefa (0 para opcional): ');
                var task = new Task(description, priority);
                queue.addTask(task);
                break;
            case '2':
                queue.removeTask();
                break;
            case '3':
                queue.listTasks();
                break;
            case '4':
                queue.taskCompleted();
                break;
            case '5':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida.');
                break;
        }
    }
}
interactiveMenu();
