function Person(firstname, lastname, age, interest){
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.interest = interest;
  this.name = function(){ return this.firstname+ " " +this.lastname;};
//   this.changeLastName = (lastname) => {
//     this.lastname = lastname;
//   };
}


String.prototype.mycustom = function(x){
  console.log("I messed with prototypes");
}
let daman = new Person("daman", "behl", 23, "coding");
Person.prototype.changeLastName = function(lastname) {
    this.lastname = lastname;
  };


console.log(daman.lastname);
console.log(daman.name());
daman.changeLastName("barnal");
console.log(daman.name());
console.log(daman.lastname.mycustom());