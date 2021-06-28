function logger() {
  console.log("My name is Felix");
}

//calling // running/ invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const otherJuice = fruitProcessor(2, 7);
console.log(otherJuice);

function createCar(wheels, dors, color) {
  console.log(wheels, dors);
  const newCar = `The created car has ${wheels} wheels and ${dors} dors, it has the ${color} color`;
  return newCar;
}

const createdCar = createCar(4, 3, "red");
console.log(createdCar);
