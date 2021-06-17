const firstName = "Felix";
const lastName = "Andries";
const job = "student";
const bearthYear = 1988;
const year = 2021;

// const felix =
//   "I'm " + firstName + " a " + (year - bearthYear) + " years old " + job;
// console.log(felix);

const newFelix = `I'm  ${firstName} a ${year - bearthYear} years old ${job}`;
console.log(newFelix);

//Multi line strings
console.log("String with\n\
mutiples \n\
lines");

console.log(`String
multiple
lines
`); //Multiline with `` Most use, cleaner
