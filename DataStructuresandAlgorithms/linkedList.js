class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class linkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    while(current) {
      if(!current.next.next) {
        let removed = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return removed;
      }
      current = current.next;
    }
  }
  shift(){
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let result = this.head;
    while (index > 0) {
      result = result.next
      index--;
    }
    return result;
  }
  set(index, value) {
    if (!this.get(index)) {
      return false;
    }
    let node = this.get(index);
    node.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let prevNode = this.get(index - 1);
    let newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return removed;
  }
  reverse() {
    if (!this.head) return null;
    if (this.head === this.tail) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    let counter = this.length;
    while (counter > 0) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      counter--;
    }
    return this;
  }
}

let single = new linkedList;
single.push(1);
// single.push(2);
// single.push(3);
single.pop()
// console.log(single.shift())
// console.log(single.unshift(0))
// console.log(single.reverse())
