if(!Array.prototype.mapUsingReduce){
    Array.prototype.mapUsingReduce = function(callback, initialValue) {
        return this.reduce(function( mappedArray, currentValue, index, array){
            mappedArray[index] = callback.call(initialValue, currentValue, index, array);
            return mappedArray;
        }, []);
    }
}

const response = [1, 2, , 4].mapUsingReduce((currentValue, index, array) => currentValue + index + array.length);
console.log(response);



// if(!Array.prototype.mapUsingReduce){
//     Array.prototype.mapUsingReduce = function(callback, initialValue) {
//         return this.reduce(function( mappedArray, currentValue, index, array){
//             mappedArray[index] = callback.call(initialValue, currentValue, index, array);
//           mappedArray[index] = callback(currentValue, index, array);
//             return mappedArray;
//         }, []);
//     }
// }

// const response = [1, 2, , 4].mapUsingReduce((currentValue, index, array) => currentValue + index + array.length);
// console.log(response);