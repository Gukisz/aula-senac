class Task {
    description: string;
    priority: number;
    status: string;

    constructor(description: string, priority: number = 0) {
        this.description = description;
        this.priority = priority;
        this.status = 'Pendente';
    }

    displayInfo(): string {
        return `Tarefa: ${this.description}, Prioridade: ${this.priority}, Status: ${this.status}`;
    }
}

class TaskQueue {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task): void {
        this.tasks.push(task);
        console.clear();
        console.log('Tarefa adicionada com sucesso!');
    }

    removeTask(): Task | null {
        if (this.tasks.length > 0) {
            const removedTask = this.tasks.shift();
            console.clear();
            console.log('Tarefa removida:', removedTask?.description);
            return removedTask || null;
        } else {
            console.clear();
            console.log('Nenhuma tarefa na fila.');
            return null;
        }
    }

    listTasks(): void {
        console.clear();
        if (this.tasks.length > 0) {
            console.log('Tarefas na fila:');
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task.displayInfo()}`);
            });
        } else {
            console.log('Nenhuma tarefa na fila.');
        }
    }

    taskCompleted(): void {
        console.clear();
        if (this.tasks.length > 0) {
            this.tasks[0].status = 'Concluída';
            console.log(`Tarefa "${this.tasks[0].description}" foi marcada como concluída.`);
        } else {
            console.log('Nenhuma tarefa na fila.');
        }
    }
}

import * as readlineSync from 'readline-sync';

function interactiveMenu() {
    const queue = new TaskQueue();
    let option = '';

    while (option !== '5') {
        console.clear();
        console.log('\n--- Menu To-Do List ---');
        console.log('1. Adicionar tarefa');
        console.log('2. Remover tarefa');
        console.log('3. Listar tarefas');
        console.log('4. Marcar tarefa como concluída');
        console.log('5. Sair');
        option = readlineSync.question('Escolha uma opção: ');

        switch (option) {
            case '1':
                console.clear();
                const description = readlineSync.question('Descrição da tarefa: ');
                const priority = readlineSync.questionInt('Prioridade da tarefa (0 para opcional): ');
                const task = new Task(description, priority);
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
                console.clear();
                console.log('Saindo...');
                break;
            default:
                console.clear();
                console.log('Opção inválida.');
                break;
        }
        
        if (option !== '5') {
            readlineSync.question('Pressione Enter para continuar...');
        }
    }
}

interactiveMenu();
