const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((elem) => elem * 2);
console.log(doubleNumArray);

const greaterThnOne = numbers.filter((elem) => elem > 1);

const arr = [1, 2, 3, 4, 5];
const cback = (accumulator, currentValue, currIndex, source) =>
  accumulator * currentValue;

console.log(arr.reduce(cback, 1));

console.log("flatten an array");

const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatten = (accumulator, currentValue) => accumulator.concat(currentValue);

console.log(arr2.reduce(flatten));

//counting instances of values in an object
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countInstances = (allNames, currentValue) => {
  if (currentValue in allNames) {
    allNames[currentValue]++;
  } else {
    allNames[currentValue] = 1;
  }
  return allNames;
};

console.log(names.reduce(countInstances, {}));

// group by using reduce

let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Daman", age: 21 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentVal) {
    let key = currentVal[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentVal);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "age");

console.log(groupedPeople);

// remove duplicates

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(myOrderedArray);
