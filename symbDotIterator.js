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

complexObject[Symbol.iterator] = function () {
  let count = -1;
  let isDone = false;
  return {
    next: () => {
      count++;
      if (count >= this.length) {
        return { done: true, value: undefined };
      }
      return {
        done: isDone,
        value: this[count].value ** this[count].exponent,
      };
    },
  };
};
// console.log("print this>>", [...complexObject]);
for (let x of complexObject) {
  console.log("inside loop>>>>>" + x);
}
