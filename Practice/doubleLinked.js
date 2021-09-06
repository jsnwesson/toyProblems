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
  pop(){
    if (!this.head) return undefined;
    var removed = this.tail;

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    removed.prev = null;
    return removed;
  }
  shift(){
    if (!this.head) return undefined;
    var removed = this.head;

    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    removed.next = null;
    return removed;
  }
  unshift(value){
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if (!this.head) return undefined;
    if (index >= this.length || index < 0) return undefined;

    var mid = Math.floor(this.length / 2);

    var i = 0;
    var current = this.head;
    if (index < mid) {
      while (i < index){
        current = current.next;
        i++;
      }
    } else {
      i = this.length - 1;
      current = this.tail;
      while (i > index) {
        current = current.prev;
        i--;
      }
    }
    return current;
  }
  set(index, value){
    if (this.get(index)) {
      var node = this.get(index);
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value){
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    var newNode = new Node(value);
    if (this.get(index - 1)) {
      var prev = this.get(index - 1);
      var next = prev.next;
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = next;
      next.prev = newNode;
      this.length++;
      return true;
    }
    //need to account for head and tail
    return false;
  }
  remove(index){

  }
}

var double = new DoublyLinkedList;
double.push(1)
double.push(2)
double.push(3)
// double.get(2)
// double.set(2, 5)
// double.pop()
// console.log(double.shift())
// double.unshift(0)
double.insert(3, 0)
console.log(double)