var arrayNesting = function(nums) {
  var maxLength = -Infinity;
  for (var i = 0; i < nums.length; i++) {
      var values = {};
      values[i] = true;
      var index = i;
      while(true) {
          if (!values[nums[index]]) {
              values[nums[index]] = true;
              index = nums[index];
          } else {
              if (Object.keys(values).length > maxLength) {
                console.log(values)
                  maxLength = Object.keys(values).length;
              }
              break;
          }
      }
  }
  return maxLength
};

console.log(arrayNesting([5,4,0,3,1,6,2]))