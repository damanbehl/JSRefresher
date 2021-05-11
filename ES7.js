class Human {
  gender = "Male";
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "daman";
  gender = "alpha MALE";
  printName = () => {
    console.log(this.name);
  };
}

const db = new Person();
db.printName();
db.printGender();
