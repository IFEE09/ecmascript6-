//Object Entries
const data = {
    frontend: 'Farid',
    backend: 'Maynor',
    designer: 'Pil'
};

//Return a matrix
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Objetc Values, only the values, without the key
const data = {
    frontend: 'Farid',
    backend: 'Maynor',
    designer: 'Pil'
};

const values = Object.values(data);
console.log(values);

//padding, adding letters to a string here
const string = 'Hello';
console.log(string.padStart(7, 'hi'));//output: hiHello
console.log(string.padEnd(12, ' -----')); //output: Hello -----

//Trailing commas
const data = {
    frontend: 'Farid', //here is the trail comma
};