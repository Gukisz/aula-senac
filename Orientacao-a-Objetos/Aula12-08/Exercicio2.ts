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
        return Math.sqrt(xDiff ** 2 + yDiff ** 2); // usando o operador de exponenciação
    }

    public clone(): Point2D {
        return new Point2D(this.x, this.y); 
    }
}

export class PointXY extends Point2D {
    constructor(x: number, y: number) {
        super(x, y); // passando parâmetros para o construtor da classe base
    }
}

export class PointEx extends Point2D {
    constructor(anotherPoint: Point2D) {
        super(anotherPoint.getX(), anotherPoint.getY()); // passando as coordenadas do ponto existente
    }
}

const point1 = new Point2D(1, 2);
const point2 = new Point2D(3, 4);

console.log("Ponto1:", point1.toString()); 
console.log("Ponto2:", point2.toString()); 

console.log("Distancia entre o ponto 1 e o ponto 2:", point1.distance(point2)); 

const point1Clone = point1.clone();
console.log("Ponto 1 clonado:", point1Clone.toString()); 

console.log("Ponto 1 é igual ao ponto 2?", point1.equals(point2)); 
console.log("Ponto 1 é igual ao Ponto 1 clonado?", point1.equals(point1Clone)); 

const pointXY = new PointXY(5, 6);
console.log("PontoXY:", pointXY.toString()); 

const pointEx = new PointEx(point2);
console.log("PontoEx:", pointEx.toString());