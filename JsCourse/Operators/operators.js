// console.log(ageFelix * 2, ageFelix / 10, 2 ** 3);
// // 2 ** 3 este 2 la putearea a 3.a 3 = 2 * 2 *2

// const firstName = "Felix";
// const lastName = "Andries";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// //Comparison operators
// console.log(ageFelix > ageGeanina); // >, <, >=, <=
// console.log(ageGeanina >= 18); //true
// console.log(ageGeanina <= 18); //false

// const isFullAge = ageGeanina >= 18; // Variabila isFullAge va fi un bolean

//Precedenta operatorilor

const now = 2037;
const ageFelix = now - 1991;
const ageGeanina = now - 2018;
console.log(ageFelix, ageGeanina);

console.log(now - 1991 > now - 2018); //Cele doua calcule se fac inanite de comparatia >

//console.log(25 - 10 - 5); // de la dreapta la stanga

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, evaluare de la dreapta la stanga
console.log(x, y);

const averageAge = (ageFelix + ageGeanina) / 2;
console.log(ageFelix, ageGeanina, averageAge);
