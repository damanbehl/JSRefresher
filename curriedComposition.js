const map = (fn) => (mappable) => mappable.map(fn);
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
const log = (...args) => console.log(...args);
const arr = [1, 2, 3, 4];
const isEven = (n) => n % 2 === 0;
const stripe = (n) => (isEven(n) ? "dark" : "light");
const stripeAll = map(stripe);
const striped = stripeAll(arr);
log(striped);
// => ["light", "dark", "light", "dark"]
const double = (n) => n * 2;
const doubleAll = map(double);
const doubled = doubleAll(arr);
log(doubled);
// => [2, 4, 6, 8]
