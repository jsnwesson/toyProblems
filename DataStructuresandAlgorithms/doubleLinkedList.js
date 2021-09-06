class Node{
  constructor(val){
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let temp = this.tail;
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.tail.prev = temp;
    }

    this.length++;
    return this;
  }
  pop(){
    let removed = this.tail;
    if (!this.head) return null;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    removed.prev = null;
    this.length--;
    return removed;
  }
  shift(){
    if (!this.head) return null;
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }
    removed.next = null;
    this.length--;
    return removed;
  }
  unshift(val){
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }
  get(index){
    if (index < 0 || index >= this.length) return null;

    let mid = Math.floor(this.length / 2);
    let counter;
    let node = this.head;


    if (index <= mid) {
      counter = 0;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while(counter !== index){
        console.log(node)
        node = node.prev;
        counter--;
      }
    }
    return node;
  }
  set(index, value){
    if (this.get(index)) {
      let node = this.get(index);
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value)

    if (index < 0 || index > this.length) return false;

    let prevNode = this.get(index - 1);
    let newNode = new Node(value);
    let following = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = following;
    following.prev = newNode;
    this.length++;
    return true;
  }
  remove(index){
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removed = this.get(index)
    let prevNode = removed.prev;
    let nextNode = removed.next;

    prevNode.next = nextNode, nextNode.prev = prevNode;
    removed.next = null, removed.prev = null;

    this.length--;
    return removed;
  }
}

let list = new DoublyLinkedList;
list.push(100);
list.push(10);
list.push('last item');
// list.unshift(1000);
// console.log(list.remove(2))
console.log(list)