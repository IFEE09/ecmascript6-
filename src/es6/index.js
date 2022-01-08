const { response } = require("express");

//Normal function in js ES5
function newFunction(name, age, country) {
    var name = name || 'ivan';
    var age = age || 29;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'Ivan', age = '29', country = 'MX') {
    console.log(name, age, country);
}

//Running ES6
newFunction2();
newFunction2('Richard', '25', 'USA' )

//Normal form in JS ES5
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Template literals in ES6
let epicPhrase2 = `${hello} ${world}`;

//Normal in js ES5
let lorem = "Lorem aha aops[ikda aspdojka asdopjk \n" + 'esto es un salto de linea';

//Multiline in ES6
let lorem2 = `Esta es otra frase que solo dando enter cambia de linea
justo asi. Esto es un salto de linea`

console.log(lorem);
console.log(lorem2)

//normal object in JS
let person1 = {
    name: 'Ivan',
    age: 29, 
    country: 'MX'
};

//Destructuring object
let { name, age, country } = person1;

console.log(person1.name, person1.age, person1.country);
console.log(name, age, country);

//Spread Operator u operador de propagacion
let team1 = ['Ivan', 'Maynor', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]; //Es este con los tres puntos

console.log(education);


//Creating normal objects ES5
//let name = 'Ivan Farid';
let age = 29;

obj = {
    name: name, 
    age: age
};

//Creating new object with params ES6
obj2 = {name, age};

//Arrow functions are exclusively of ES6
const names = [
    {
        name: 'Ivan', age: 29
    },

    {
        name: 'Yesica', age: 27
    }
]

//ES5
let listOfNames = names.map( function(item) {
    console.log(item.name);
});

//ES6 arrow function
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //... code
}

const listOfNames4 = name => {
    //... code
}

const square = num => num * num;

//Example
console.log(square(3))

//Promises ES6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey positive')
        } else {
            reject('Hey positive')
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//Class
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 2;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    
}

const calc = new calculator();
console.log(calc.sum(2,3));

//import and export modules
import hello  from "./module.js";

hello();

//Generators
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }

    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);