//propagation 
const obj = {
    name: 'Ivan',
    age: '29',
    country: 'MX',
}

let {name, ...all} = obj;
console.log(name, all);

//adding objects
const obj1 = {
    name: 'Ivan',
    age: '29',
}

const obj2 = {
    ...obj1,
    country: 'MX',
}

console.log(obj2);

//Promise finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Tested Error'))
    })  
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Making the structure like an regular expression
const match = regexData.exec('2018-04-20');
const year = match[1]; //taking the 2018 as a value
const month = match[2]; //taking the 04 as a value
const day = match[3]; //taking the 20 as a value

console.log(year, month, day);