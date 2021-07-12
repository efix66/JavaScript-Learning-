// const calcAge1 = (birthYear) => 2021 - birthYear;

// const showAge = calcAge1(2018);
// // console.log(`Varsta lui H este ${showAge} ani`);

// // Afla cati ani mai am pana la pensie

// const retirementYears = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirementValue = 70;
//   const yearsRetirement = retirementValue - age;
//   //   return yearsRetirement;
//   return `${firstName} se pensioneaza peste ${yearsRetirement} de ani`;
// };

// const retirementResult = retirementYears(1988, "Felix");
// console.log(retirementResult);

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 70 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  //return
};

console.log(yearsUntilRetirement(1988, "Felix"));
console.log(yearsUntilRetirement(1940, "Dan"));
