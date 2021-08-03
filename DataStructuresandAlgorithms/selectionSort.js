let model = require('./model.js')

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let mindex = i;
    let min = array[i];
    let isChanged = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        mindex = j;
        isChanged = true;
      }
    }
    if (isChanged) {
      model.sort(array, i, mindex);
    }
  }
  return array;
}

console.log(selectionSort([2,3,4,51,1,3,56,67,43,6,7,7,3,2]))