// Task1
console.log(`Task #1\n`);

interface IPerson {
    name: string;
    age: number;

    greet(): void;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi ${this.name} age: ${this.age}`);
    }
}

const person1 = new Person('Ivan', 26);
person1.greet();

// Task2
console.log(`Task #2\n`);
interface IShape {
    sideA: number;
    sideB?: number;

    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements IShape {
    sideA: number;
    constructor(r: number) {
        this.sideA = r;
    }
    calculateArea(): number {
        return Math.PI * this.sideA ** 2;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.sideA;
    }
}

class Rectangle implements IShape {
    sideA: number;
    sideB: number;
    constructor(sideA: number, sideB: number) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    calculateArea(): number {
        return this.sideA * this.sideB;
    }
    calculatePerimeter(): number {
        return 2 * (this.sideA + this.sideB);
    }
}

let circle = new Circle(5);
console.log(`Площадь круга: ${circle.calculateArea()}`);
console.log(`Длина окружности: ${circle.calculatePerimeter()}`);

let rectangle = new Rectangle(4, 5);
console.log(`Площадь прямоугольника: ${rectangle.calculateArea()}`);
console.log(`Периметр прямоугольника: ${rectangle.calculatePerimeter()}`);
