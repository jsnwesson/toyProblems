let model = require('./model.js');
// const bubbleSort = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (array[j] > array [j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array
// }

const bubbleSort = (array) => {
  let noSwaps;

  for (let i = array.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array [j + 1]) {
        model.sort(array, j, j + 1)
      }
      noSwaps = false;
    }
    if (noSwaps) break;
  }
  return array
}


console.log(bubbleSort([2,1,4,62,0,556,34,25,58,853,454]));
console.log(bubbleSort([-2,-5,-74,-21,9,-1,-6,-56]));