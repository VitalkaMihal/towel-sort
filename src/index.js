let array = [];
let arr = [];
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  } else {
         array = matrix.flat();
     for (let i = 0; i < array.length ; i++){
       if (array[i] > 0){
         arr.push(array[i]);
       }
     }
     return arr.sort();
  }
}
