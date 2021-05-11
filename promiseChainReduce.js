//returning promises in chained manner for functions that can return promises

function runPromisesInOrder(arr, input){
    return arr.reduce((promiseChain, currFunction) => 
                      promiseChain.then(currFunction), Promise.resolve(input));
  }
  
  function p1(a){
    return new Promise((resolve, reject)=>{
      resolve(a*5);
    });
  }
  
  function p2(a){
    return new Promise((resolve, reject)=>{
      resolve(a*2);
    });
  }
  function p3(a){
    return new Promise((resolve, reject)=>{
      resolve(a*3);
    });
  }
  function p4(a){
    return new Promise((resolve, reject)=>{
      resolve(a*4);
    });
  }
  
  const promiseArr = [p1, p2, p3, p4];
  
    runPromisesInOrder(promiseArr,100).then(console.log);
  