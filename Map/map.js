//Map Method
const people = [
  {
    name: "Felix",
    age: 32,
    position: "developer",
  },
  {
    name: "Geanina",
    age: 31,
    position: "theacher",
  },
  {
    name: "Horia",
    age: 3,
    position: "our kid",
  },
];

// Map returns a new array
// Does not change the size of the original array(unlike filter)
// Uses the values from the original array whrn making a new one

const ages = people.map((person) => person.age * 2);
console.log(ages);

const newPeople = people.map((item) => {
  return { name: item.name, age: item.age, position: item.position };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);

const data = document.querySelector(".output-data");

data.innerHTML = names.join("");
