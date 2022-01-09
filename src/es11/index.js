const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

//Big Int, just put n at the end
const aBigNumber = 9007199254740991n;

//The same of the Big Int
const anotherBigNumber = BigInt(9007199254740991);

//promises allsettled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//global this
console.log(window);
console.log(globalThis);

//Ternary operator
const fooo = null ?? 'default string';
console.log(fooo);

//Optional Chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}
