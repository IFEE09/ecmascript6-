const { response } = require("express");

//Replace feature
const word = 'Hey hello world';

const replacedword =  word.replace('Hey', ' ');
console.log(replacedword); //OutPut:  hello world

//Replace all
const allReplaced = word.replaceAll('e', 'a');
console.log(allReplaced);

//Show
class Message {
    show(val) {
        console.log(val);
    };
}

class PrivateMessage {
    #show(valP) {
        console.log(val);
    };
}

const message = new Message();
const message2 = new PrivateMessage();
message.show('Hola!');
message2.show('Hola esto no debe mostrarse!');

//Promise Any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); //First who resolve is promise2, so the output will be 2

//avoid the garbage collector in JS, making a weak ref 
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element); //No Garbage collector 
    }
}

//New && and ||
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);


let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);