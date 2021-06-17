// Filter - returns a ney array, can manipulate the size of a new array (unlike map), returns based a condition

//Find - returns single instance (object), returns first match, if no match - undifined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern " },
];

//filter
const youngPeople = people.filter((person) => {
  //   if (person.position === "developer") {
  //     return person.position;
  //   }
  return person.age < 30;
});
console.log(youngPeople);
//no match
const seniorDevs = people.filter((item) => item.position === "SeniorDev");
console.log(seniorDevs); //Eampty array, no position match senior dev

//find
const peter = people.find((person) => person.name === "peter");
console.log(peter);

//no match
const older = people.find((people) => people.age > 35);
console.log(older);

// multiple matches
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); //returns a single instance, filter will return all three

const anna = people.filter((person) => person.name === "anna");
console.log(peter.position);
console.log(anna[0].position);
