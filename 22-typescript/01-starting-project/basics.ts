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