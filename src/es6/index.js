//default params

//Normal declaration
function newFunction(name, age, country) {
    var name = name || 'Ivan';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'Ivan', age = 29, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Farid', '28', 'SE'); //You can still give another param

//ES6 new print of multinline and using of let
let nombre = 'Ivan Farid Espadas Escalante';
console.log(`Hey this is a new form to print, sincerely ${nombre}`);

//object person
let person = {
    name: 'Ivan Farid',
    age: 29,
    country: 'MX'
}

//Destructuring ES6
let {name, age, country} = person;
//Now you can use it 
console.log(name, age, country);

//spread operator
let team1 = ['Ivan', 'Farid', 'Espadas'];
let team2 = ['Ivana', 'Juliana'];

let team3 = [...team1, ...team2];//Spread operator
console.log(team3);

//Const ES6
const a = 'b'; //No re asignation
