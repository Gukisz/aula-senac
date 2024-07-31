class Programmer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    work(): string {
        return `${this.name} está trabalhando.`;
    }
}

class Junior extends Programmer {
    constructor(name: string) {
        super(name);
    }

    work(): string {
        return `${this.name} está resolvendo bugs.`;
    }
}

class MidLevel extends Programmer {
    constructor(name: string) {
        super(name);
    }

    work(): string {
        return `${this.name} está criando features.`;
    }
}

class Senior extends Programmer {
    constructor(name: string) {
        super(name);
    }

    work(): string {
        return `${this.name} está administrando a equipe.`;
    }
}

class DevCompany {
    programmers: Programmer[];

    constructor() {
        this.programmers = [];
    }

    addProgrammer(programador: Programmer): void {
        this.programmers.push(programador);
    }

    working(): void {
        for (const programmer of this.programmers) {
            console.log(programmer.work());
        }
    }
}

const company = new DevCompany();

const junior = new Junior('Pedro');
const midLevel = new MidLevel('Richarlison');
const senior = new Senior('Samantha');

company.addProgrammer(junior);
company.addProgrammer(midLevel);
company.addProgrammer(senior);

company.working();
