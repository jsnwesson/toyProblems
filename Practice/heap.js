class MaxBinaryHeap{
  constructor(){
    this.storage = []
  }
  insert(val){
    this.storage.push(val);
    var index = this.storage.length - 1;
    var parentInd = Math.floor((index - 1) / 2);
    while (val > this.storage[parentInd]){
      if (this.storage[parentInd] < val){
        var temp = this.storage[parentInd];
        this.storage[parentInd] = val;
        this.storage[index] = temp;
        index = parentInd;
      }
    }
    return this.storage;
  }
  extractMax(){
    var lastInd = this.storage.length - 1;

    var temp = this.storage[0];
    this.storage[0] = this.storage[lastInd];
    this.storage[lastInd] = temp;
    this.storage.pop();

    var currentInd = 0
    var currentValue = this.storage[currentInd];
    while (true) {
      var left = currentInd * 2 + 1;
      var right = currentInd * 2 + 2;
      var leftNum = this.storage[left];
      var rightNum = this.storage[right];
      var maxNum, maxInd;
      if (left > lastInd) {
        return temp;
      }

      if (leftNum && rightNum) {
        if (leftNum > rightNum){
          maxNum = leftNum;
          maxInd = left;
        } else {
          maxNum = rightNum;
          maxInd = right;
        }
      } else if (leftNum) {
        maxNum = leftNum;
        maxInd = left;
      } else {
        break;
      }
      if (currentValue < maxNum) {
        this.storage[maxInd] = currentValue;
        this.storage[currentInd] = maxNum;
        currentInd = maxInd;
      } else {
        break;
      }
    }
    return temp;
  }
}

var heap = new MaxBinaryHeap;
heap.insert(10);
heap.insert(1);
heap.insert(100);
heap.insert(20);
heap.insert(15);
heap.insert(37);
heap.insert(9);
heap.insert(12)
console.log(heap)
heap.extractMax();
console.log(heap)