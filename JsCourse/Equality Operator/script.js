// Equality Operators == vs. ===

const age = "18";
if (age === 18) console.log("You just become an adult (strict)");
// 18 === 18 => true
// 18 === 19 => false
// === => strict equality operator, does not perfomr type coersion, only returns true when both values are the same

if (age == 18) console.log("You just become an adult (loose)");
// '18' == 18 => true, the double equales foes type coersion, in this case it converts '18' to a number

const favourite = Number(prompt("What is your favorite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing  number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23");
}
