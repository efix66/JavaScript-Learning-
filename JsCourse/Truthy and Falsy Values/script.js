//Truthy and Falsy Values

// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Felix"));
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;

if (money) {
  console.log(`Don't spendit all`);
} else {
  console.log(`You are broke`);
}

let height;
if (height) {
  console.log("Hei height is defined ");
} else {
  console.log("Height in Undefined");
}
