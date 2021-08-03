let model = require('./model.js');

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
        array[j+1] = array[j];
    }
    array[j+1] = currentVal;

  }
  return array;
}

console.log(insertionSort([2,4,3,6,43,46,32,1,4,6,7,46,2,4,36,467,93]));
