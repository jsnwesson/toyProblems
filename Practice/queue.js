class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue(){
    if (!this.first) return undefined;

    var removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      var temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }

    this.size--;
    return removed;
  }
}

var queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue)