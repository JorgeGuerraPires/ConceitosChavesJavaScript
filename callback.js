
//------------------------------------------
//Usando atraso para simular uma callback
// const waitForIt = setTimeout(function () {
//     console.log("My name is Jorge Guerra Pires");
// }, 2000);
//----------------------------------------
// //------------------------------------------
//Usando atraso para simular uma callback, estratégia 3
// const callback = function () {
//     console.log("My name is Simon 2");
// }

// const waitForIt2 = setTimeout(() => {
//     console.log("This goes first");
//     callback();
// }, 2000);

// //----------------------------------------




// //------------------------------------------
// //Usando atraso para simular uma callback, estratégia 2
// const callback = function () {
//     console.log("My name is Simon 2");
// }

// const waitForIt2 = setTimeout(callback, 2000);
// //----------------------------------------


// //-------------------------------------------
console.log("Hello, what's your name?");//first

const waitForIt3 = setTimeout(function () {
    console.log("My name is Simon");
}, 2000);

console.log("Nice to meet you Simon");//last
// //---------------------------------------