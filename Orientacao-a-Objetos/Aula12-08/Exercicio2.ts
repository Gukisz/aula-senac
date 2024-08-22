import * as rl from 'readline-sync';

export class Point2D {
    private x: number;
    private y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public setCoordinates(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public setByPoint(anotherPoint: Point2D): void {
        this.x = anotherPoint.getX();
        this.y = anotherPoint.getY();
    }

    public equals(anotherPoint: Point2D): boolean {
        return (anotherPoint.getX() === this.getX()) && (anotherPoint.getY() === this.getY());
    }

    public toString(): string {
        return `x: ${this.x}, y: ${this.y}`;
    }
    
    public distance(anotherPoint: Point2D): number { 
        let xDiff = anotherPoint.getX() - this.x;
        let yDiff = anotherPoint.getY() - this.y;
        return Math.sqrt(xDiff ** 2 + yDiff ** 2); 
    }

    public clone(): Point2D {
        return new Point2D(this.x, this.y); 
    }
}

export class PointXY extends Point2D {
    constructor(x: number, y: number) {
        super(x, y); 
    }
}

export class PointEx extends Point2D {
    constructor(anotherPoint: Point2D) {
        super(anotherPoint.getX(), anotherPoint.getY()); 
    }
}

// Função para criar um novo ponto
function createPoint(): Point2D {
    const x = rl.questionFloat('Digite o valor de x: ');
    const y = rl.questionFloat('Digite o valor de y: ');
    return new Point2D(x, y);
}

// Menu interativo
let point1 = createPoint();
let point2 = createPoint();

let option: number;

do {
    console.log('\nEscolha uma opção:');
    console.log('1 - Mostrar ponto 1');
    console.log('2 - Mostrar ponto 2');
    console.log('3 - Calcular a distância entre os pontos');
    console.log('4 - Clonar o ponto 1');
    console.log('5 - Verificar se os pontos são iguais');
    console.log('6 - Criar um novo PointXY');
    console.log('7 - Criar um novo PointEx baseado no ponto 2');
    console.log('8 - Sair');
    
    option = rl.questionInt('Opção: ');

    switch (option) {
        case 1:
            console.log('Ponto 1:', point1.toString());
            break;
        case 2:
            console.log('Ponto 2:', point2.toString());
            break;
        case 3:
            console.log('Distância entre o ponto 1 e o ponto 2:', point1.distance(point2));
            break;
        case 4:
            const point1Clone = point1.clone();
            console.log('Ponto 1 clonado:', point1Clone.toString());
            break;
        case 5:
            console.log('Ponto 1 é igual ao ponto 2?', point1.equals(point2));
            break;
        case 6:
            const pointXY = new PointXY(
                rl.questionFloat('Digite o valor de x para PointXY: '),
                rl.questionFloat('Digite o valor de y para PointXY: ')
            );
            console.log('PontoXY:', pointXY.toString());
            break;
        case 7:
            const pointEx = new PointEx(point2);
            console.log('PontoEx baseado no ponto 2:', pointEx.toString());
            break;
        case 8:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            break;
    }
} while (option !== 8);
