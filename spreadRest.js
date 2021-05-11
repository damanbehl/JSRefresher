const dar = [1, 2, 3];
const bac = [...dar, 4];
console.log(bac);

const person = {
  name: 'Max',
  gender: 'Male'
}
const newPerson = {
  ...person,
  age: 23
}
console.log(newPerson);
// spread ops
const filter = (...args) => { return args.filter(el => el % 2 == 0);}

console.log(filter(1, 2, 3, 4));