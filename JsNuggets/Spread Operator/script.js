//Spread Operator

const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["Jhon", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
//const newFriends = friends;
//copy
const newFriends = [...friends];
newFriends[0] = "nancy";
console.log(friends);
console.log(newFriends);

//ES2018 - ES8 Objects

const person = { name: "John", job: "developer" };
const newPerson = { ...person, city: "Galati", name: "Felix" };
console.log(person);
console.log(newPerson);

const cars = ["Mercedes", "Bmw", "Opel"];
const germanyCars = [...cars];
germanyCars[3] = "Wolkswagen";
console.log(cars);
console.log(germanyCars);

const carDetailes = { model: "Audi", year: 1988, topSpeed: 200 };
console.log(carDetailes);

const newCar = { ...carDetailes, isFast: true };
console.log(newCar);

const fructe = ["mar", "par", "banana", "strugure"];
console.log(fructe);

const legume = ["morcov", "rosii", "vinete", "fasole"];
console.log(legume);

const fructeSiLegume = [...fructe, ...legume];
console.log(fructeSiLegume);
fructeSiLegume[0] = "capsuni";
console.log(fructeSiLegume);

const animalSalbatic = { nume: "Tigru", provenienta: "India", carnivor: true };
console.log(animalSalbatic);

const animaleSalbatice = {
  ...animalSalbatic,
  numarExemplare: 3000,
};

console.log(animaleSalbatice);
