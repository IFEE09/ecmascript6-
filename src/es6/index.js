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
let epicPhrase = `${hello} ${world}`;