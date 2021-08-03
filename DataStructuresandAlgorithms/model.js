const sort = (array, num1, num2) => {
  return [array[num1], array[num2]] = [array[num2], array[num1]];
}

module.exports = {
  sort,
}