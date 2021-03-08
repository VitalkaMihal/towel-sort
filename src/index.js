let array = [];
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  } else {
     array = matrix.flat();
     return array.sort((a, b) => a - b);
  }
}
