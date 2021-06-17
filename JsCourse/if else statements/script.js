const age = 15;

if (age >= 19) {
  console.log(`Horia poate sa conduca 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Horia is to young, wait another ${yearsLeft} years`);
} //control structure

const birthYear = 1988;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Felix s-a nascut in secolul ${century}`);
