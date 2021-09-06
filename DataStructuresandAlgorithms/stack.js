class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value){
    let newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop(){
    if (!this.size) {
      return null;
    }

    let removed = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removed.value;
  }
}

class Node{
  constructor(value){
    this.value = value
    this.next = null;
  }
}

let stack = new Stack;
stack.push(1);
// stack.push(2);
// stack.pop();
// stack.push(3);
stack.pop();
console.log(stack)