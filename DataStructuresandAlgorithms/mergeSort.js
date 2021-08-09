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

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return mergeArrays(left, right);
}

console.log(mergeSort([1,2,3,4,5,6,7,87,8,9,10]))