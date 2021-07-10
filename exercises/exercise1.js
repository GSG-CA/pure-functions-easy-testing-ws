// leave me alone :) :) :) <3 <3 <3
let constantNumber = 5;
const constantArray = [5, 7, 23, 4];
const constantObject = {
  a: 5,
  b: 2,
  c: 8,
};
// leave me alone :) :) :) <3 <3 <3

// Refactor the following functions into pure functions:

const addOne = () => {
  constantNumber += 1;
  return constantNumber;
};

const timesTwo = () => {
  constantNumber = constantNumber * 2;
  return constantNumber;
};

const incrementArray = (array) => {
  array.forEach((x, i) => {
    array[i] = x + 1;
  });
  return array;
};

const addNumberArray = (array, number) => {
  array.push(number);
  return array;
};

const incrementObject = (object) => {
  Object.keys(object).forEach((x) => {
    object[x] = object[x] + 1;
  });
  return object;
};

module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject,
};
