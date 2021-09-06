class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value){
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  pop(){
    if (!this.first) return undefined;
    var removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    removed.next = null;
    return removed;
  }
}

class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

var stack = new Stack();

stack.push(1);
// stack.push(2);
// stack.push(3);
stack.pop();
console.log(stack)