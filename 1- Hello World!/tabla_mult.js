// Programa que realiza la tabla de multiplicar de un número
// suministrado en una variable.

let readlineSync = require("readline-sync");
let num = readlineSync.questionInt("Dime la tabla a realizar: ");

// De forma creciente
for (let i=1; i<=10; i++)
    console.log(num + ' x ' + i + ' = ' + num*i);

console.log('------');
// De forma decreciente
for (let i=10; i>=1; i--)
    console.log(num + ' x ' + i + ' = ' + num*i);