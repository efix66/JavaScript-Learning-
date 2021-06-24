// faster/easier way to access/unpack variables from arrays, objects

const felix = {
  first: "Felix",
  last: "Andries",
  city: "Galati",
  siblings: {
    brother: "Dan",
  },
};

// const firstName = felix.first;
// const lastName = felix.last;
// const brother = felix.siblings.brother;

// console.log(firstName, lastName, brother);

// const {
//   first,
//   last,
//   city,
//   zip,
//   siblings: { brother: favoriteSibling },
// } = felix;
// console.log(first, last, city, favoriteSibling);

function printPerson({ first, last, city, siblings: { brother } }) {
  //const { first, last } = person; //destructuring in the function body
  console.log(first, last, city);
}

printPerson(felix);
