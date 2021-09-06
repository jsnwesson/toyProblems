class Node {
  constructor(val){
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value){
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var double = new DoublyLinkedList;
double.push(1)
double.push(2)
double.push(3)
console.log(double)