//Type Conversion

//STRING TO NUMBER
const inputYear = "1988";
console.log(Number(inputYear) + 18); //The original value is not converted

console.log(Number("Felix")); //NaN
console.log(typeof NaN); //STILL A NUMBUNER BUT NOT A VALID ONE

//NUMBER TO STRING
console.log(String(33), 33);

//TYPE COERCION
console.log("I am " + 33 + " years old"); // The + operator triggers the coercion
console.log("23" - "10" - 3); // converted the string to number, if was the + operator => a concatenation 23103
console.log("23" * "2"); //converted to number
console.log("23" > "18"); // convert string to number, value true

let n = "1" + 1; //concatenation with + operator
n = n - 1; // String to number with - operator
console.log(n); //result 10 -- a number
