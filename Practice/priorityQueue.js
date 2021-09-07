class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, pri){
    var newNode = new Node(val, pri);
    if (!this.values.length) {
      this.values.push(newNode);
      return this;
    }
    this.values.push(newNode);

    var currentInd = this.values.length - 1;
    var parentInd = Math.floor((currentInd - 1) / 2);

    while(this.values[parentInd] && this.values[currentInd].priority < this.values[parentInd].priority) {
      var temp = this.values[parentInd];
      this.values[parentInd] = this.values[currentInd];
      this.values[currentInd] = temp;
      currentInd = parentInd;
      parentInd = Math.floor((currentInd - 1) / 2);
    }
    return this;
  }
  dequeue(){
    var removed = this.values[0];
    var lastIndex = this.values.length - 1;

    this.values[0] = this.values[lastIndex];
    this.values[lastIndex] = removed;
    this.values.pop();

    var currInd = 0;
    var current = this.values[currInd];


    var maxPri, maxInd;

    while (true) {
      var leftInd = currInd * 2 + 1;
      var rightInd = currInd * 2 + 2;
      var left = this.values[leftInd];
      var right = this.values[rightInd];
      if (left && right) {

        if(left.priority < right.priority){
          maxPri = left;
          maxInd = leftInd;
        } else {
          maxPri = right;
          maxInd = rightInd;
        }
      } else if (left) {
        maxPri = left;
        maxInd = leftInd;
      } else {
        break;
      }

      if (maxPri.priority < current.priority) {
        var temp = current;
        this.values[currInd] = this.values[maxInd];
        this.values[maxInd] = temp;
        currInd = maxInd;

      } else {
        break;
      }
    }
    return removed;
  }
}

class Node{
  constructor(val, pri) {
    this.value = val;
    this.priority = pri;
  }
}

var queue = new PriorityQueue;
queue.enqueue(1,1);
queue.enqueue(2,2);
queue.enqueue(3,3);
queue.enqueue(0,0);
queue.enqueue(4,4) ;
queue.enqueue(-1,-1);
console.log(queue.values)
queue.dequeue();
console.log(queue.values)