class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value){
    let newNode = new Node(value)
    if (!this.size) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(this.size === 0) return null;

    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }
    this.size--;
    return removedNode.value;
  }
}

let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
console.log(queue.dequeue());
// console.log(queue)