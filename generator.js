//better solution to symbolDotIterator
const complexObject = [
  {
    value: 3,
    exponent: 2,
  },
  {
    value: 21,
    exponent: 4,
  },
  {
    value: 55,
    exponent: 7,
  },
  {
    value: 6,
    exponent: 1,
  },
];

complexObject[Symbol.iterator] = function* () {
  let counter = complexObject.length;
  while (counter > 0) {
    console.log(complexObject.length - counter);
    let obj = complexObject[complexObject.length - counter];
    counter--;
    yield obj.value ** obj.exponent;
  }
};
// console.log("print this>>", [...complexObject]);
for (let x of complexObject) {
  console.log("inside loop>>>>>" + x);
}
