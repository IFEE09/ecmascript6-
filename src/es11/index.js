const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

//Big Int, just put n at the end
const aBigNumber = 9007199254740991n;

//The same of the Big Int
const anotherBigNumber = BigInt(9007199254740991);
