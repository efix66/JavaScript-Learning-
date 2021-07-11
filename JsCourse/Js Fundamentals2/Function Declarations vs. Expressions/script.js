//Function Declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1985);

//Function Expresion
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1988);
console.log(age1, age2);

//Function declaration ce calculeaza varsta lui Horia
function horiaAge(birthYear) {
  return 2021 - birthYear;
}

const ageH1 = horiaAge(2018);

//Function Expresion ce calculeaza varsta lui Horia
const horiaAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const ageH2 = horiaAge2(2018);
console.log(ageH2, ageH1);

const carYear = function (year) {
  return 2021 - year;
};

const carAge = carYear(2009);
console.log(`Masina mea are ${carAge} ani`);
