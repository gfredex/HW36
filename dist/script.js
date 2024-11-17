"use strict";
// Task1
console.log(`Task #1\n`);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi ${this.name} age: ${this.age}`);
    }
}
const person1 = new Person('Ivan', 26);
person1.greet();
console.log('');
// Task2
console.log(`Task #2\n`);
class Circle {
    constructor(r) {
        this.sideA = r;
    }
    calculateArea() {
        return Math.PI * this.sideA ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.sideA;
    }
}
class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    calculateArea() {
        return this.sideA * this.sideB;
    }
    calculatePerimeter() {
        return 2 * (this.sideA + this.sideB);
    }
}
let circle = new Circle(5);
console.log(`Площадь круга: ${circle.calculateArea()}`);
console.log(`Длина окружности: ${circle.calculatePerimeter()}`);
let rectangle = new Rectangle(4, 5);
console.log(`Площадь прямоугольника: ${rectangle.calculateArea()}`);
console.log(`Периметр прямоугольника: ${rectangle.calculatePerimeter()}`);
console.log('');
const Dog = {
    name: 'Dog1',
    breed: 'golden retriever'
};
const Cat = {
    name: 'Cat1',
    color: 'white'
};
function printPetInfo(pet) {
    if (pet.breed) {
        console.log(`Dog name: ${pet.name} and breed: ${pet.breed}`);
    }
    else if (pet.color) {
        console.log(`Cat name: ${pet.name} and color: ${pet.color}`);
    }
}
printPetInfo(Dog);
printPetInfo(Cat);
