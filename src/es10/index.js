//flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat()); //flating the array in 1 level
console.log(array.flat(2)); //flating the array in 2 levels


//flatMap
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart to deleting blank spaces
let hello = '    hello world     ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//Try-Catch
try {

} catch {
    error
}

//from entries to making an array to a object
let entries = [['name', 'Ivan'], ['age', 32]];
console.log(Object.fromEntries(entries)); //Making an array to a object


//my symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);