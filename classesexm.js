class Human{
  constructor(){
    this.gender = "Male";
  }
printGender(){
  console.log(this.gender);
}
}

class Person extends Human{
  constructor(){
    super();
    this.name = "daman";
    this.gender = "alpha MALE";
  }
  printName(){
    console.log(this.name);
  }
}

const db = new Person();
db.printName();
db.printGender();