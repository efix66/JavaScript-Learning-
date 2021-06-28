// //Expresions
// 3 + 4;
// 1991;
// true;
// true && false && !false;

// //STATEMENTS
// if (23 > 10) {
//   const str = "23 is bigger";
//   console.log(str);
// }

// console.log(`I'm ${2037 - 1911} years old`);

const age = 23;

// age >= 18
//   ? console.log("You have the right to drink wine")
//   : console.log("You cant drink wine");

const drink = age >= 18 ? "wine" : "watter";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "watter";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "watter"}`);
