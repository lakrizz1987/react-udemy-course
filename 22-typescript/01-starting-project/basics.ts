//Primitives

let myName: string = 'Ivo';

myName = 'Pesho';

let age: number;

age = 12;

let isStudy: boolean;

isStudy = true;

//Arrays Objects

let array: string[];

array = ['Ivo', 'Pesho']

let preson: {
    name: string;
    age: number;
    isStudy: boolean;
};

preson = {
    name: 'Ivo',
    age: 34,
    isStudy: true
}

let arrayPersons: {
    name: string;
    age: number;
    isStudy: boolean;
}[];

arrayPersons = [];
arrayPersons.push(preson);

//infirence

let tea = 'My-day';
//tea = 2 - wrong
tea = "Tea"

//union types

let course: string | number = 'React';
course = 123;

//aliases

type Car = {
    make: string;
    hp: number;
}

const bmw: Car = {
    make: 'BMW',
    hp: 200
}

let arrayOfCars: Car[];
arrayOfCars = [{ make: 'Polo', hp: 120 }, { make: 'Reno', hp: 420 }]

//functions & types

function sum(a: number, b: number): number | string {
    return a + b
}

//Generics

function insertInArray<T>(array: T[], value: T) {
    const newArr = [value, ...array]
    return newArr
};

const arrNumberss = insertInArray([1, 2, 3], 4)
const arrStringss = insertInArray(['a', 'b'], 'c')