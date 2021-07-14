//ADD ELEMENTS
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Jhon"); // il aduga ca primul element
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); //last
const popped = friends.pop(); //returneaza elementul eliminat
console.log(friends);
console.log(popped);

friends.shift(); //Elimina primul element
console.log(friends); //returneaza elementul eliminat

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // Includes, returneza tru sau false
console.log(friends.includes("Bobe"));
console.log(friends.includes("23")); //False, strict equality

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  console.log("You dont have any friend");
}
