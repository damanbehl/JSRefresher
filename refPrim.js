//reference and primitive types

const person = {
  name: 'max'
};
const secondPerson = {...person};

person.name = 'Daman';
console.log(secondPerson.name);


const arr = [1, 2,3];

const arr2 = arr;


arr[0] = 0;


console.log(arr2);