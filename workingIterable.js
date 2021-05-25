const myString = new String("abcdef");

myString[Symbol.iterator] = function () {
  let i = this.length - 1;
  return {
    next: () => {
      console.log(this);
      return {
        done: i >= 0 ? false : true,
        value: this[i--],
      };
    },
  };
};

for (const char of myString) {
  console.log(char);
}

// prints f, e, d, c, b, a

console.log([...myString]);

// prints [f, e, d, c, b, a]
