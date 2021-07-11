const calcAge1 = (birthYear) => 2021 - birthYear;

const showAge = calcAge1(2018);
// console.log(`Varsta lui H este ${showAge} ani`);

// Afla cati ani mai am pana la pensie

const retirementYears = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirementValue = 70;
  const yearsRetirement = retirementValue - age;
  //   return yearsRetirement;
  return `${firstName} se pensioneaza peste ${yearsRetirement} de ani`;
};

const retirementResult = retirementYears(1988, "Felix");
console.log(retirementResult);
