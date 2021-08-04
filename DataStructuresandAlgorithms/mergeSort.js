// create a function that merges two already-sorted arrays
const mergeArrays = (array1, array2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++
    }
  }
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    results.push(array2[j]);
    j++
  }
  // let greaterArray = array1.length > array2.length ? array1 : array2
  // let lesserArray = greaterArray.length === array1.length ? array2 : array1;
  // for (let i = j; i < greaterArray.length; i++) {
  //   console.log(greaterArray[i], lesserArray[i])
  //   if (greaterArray[i] < lesserArray[j]) {
  //     result.push(greaterArray[i]);
  //   } else if (greaterArray[i] === lesserArray[j]){
  //     result.push(greaterArray[i], lesserArray[j]);
  //     j++;
  //   } else {
  //     result.push(lesserArray);
  //     j++;
  //   }
  // }
  return results;
}

console.log(mergeArrays([1,2,3,4,5,6,7,8],[7,8,9,10]))