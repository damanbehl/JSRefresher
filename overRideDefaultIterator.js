String.prototype[Symbol.iterator] = function() {
    let count=this.length;
     return {
      next(){
          if(count>0){
            count--;
            return {done:false, value:"NOPE!"};
          }
        return {done: true}
      }
    }
  }
  var name = "DAMAN";
  console.log(...name);