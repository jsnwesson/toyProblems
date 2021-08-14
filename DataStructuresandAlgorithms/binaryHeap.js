class BinaryHeap{
  constructor(){
    this.values = [];
  }
  insert(value){
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    while (value > this.values[parentIndex]){
      let temp = this.values[parentIndex];
      this.values[parentIndex] = value;
      this.values[index] = temp;
      index = parentIndex;
    }
    return this.values;
  }
  extractMax(){
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    this.values.pop();

    let parentIndex = 0;
    let leftIndex = 2*parentIndex + 1;
    let rightIndex = 2*parentIndex + 2;
    let left = this.values[leftIndex];
    let right = this.values[rightIndex];

    while(this.values[parentIndex] < left || this.values[parentIndex] < right) {
      leftIndex = 2*parentIndex + 1;
      rightIndex = 2*parentIndex + 2;
      left = this.values[leftIndex];
      right = this.values[rightIndex];
      if (leftIndex > this.values.length) {
        return this.values;
      }
      if (left > this.values[parentIndex] && right < this.values[parentIndex]) {
        let swap = this.values[parentIndex];
        this.values[parentIndex] = left;
        left = swap;
        parentIndex = leftIndex;
      } else if (left < this.values[parentIndex] && right > this.values[parentIndex]) {
        let swap = this.values[parentIndex];
        this.values[parentIndex] = right;
        right = swap;
        parentIndex = rightIndex;
      } else if (left > this.values[parentIndex]  && right > this.values[parentIndex]) {
        let greatest = left > right ? left : right;
        let swapIndex = left > right ? leftIndex : rightIndex;

        let swap = this.values[parentIndex];
        this.values[parentIndex] = greatest;
        greatest === left ? this.values[leftIndex] = swap : this.values[rightIndex] = swap;

        parentIndex = swapIndex === leftIndex ? leftIndex : rightIndex;
      }
    }
    // leftIndex = 2*parentIndex + 1;
    // rightIndex = 2*parentIndex + 2;
    // left = this.values[leftIndex];
    // right = this.values[rightIndex];
    return temp;
  }
}

let heap = new BinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(112);
heap.insert(2);
heap.insert(24);
heap.insert(44);
heap.insert(33);
heap.insert(12);
heap.insert(1);
heap.insert(19);
heap.extractMax();
console.log(heap);