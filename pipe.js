const double = (x) => x * 2;
const triple = (x) => x * 3;
const quadruple = (x) => x * 4;

const pipe = (...functions) => (input) =>
  functions.reduce((y, f) => f(y), input);
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

console.log(multiply6(6));
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240
