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

  }
  insert(index, value) {

  }
  remove(index){

  }
}

let list = new DoublyLinkedList;
list.push(100);
list.push(10);
list.push('last item');
list.unshift(1000);
console.log(list.get(3))