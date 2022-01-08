//Normal function in js
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

//Normal form in JS
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Template literals in ES6
let epicPhrase2 = `${hello} ${world}`;

//Normal in js
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

