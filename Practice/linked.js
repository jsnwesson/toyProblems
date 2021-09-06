class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let removed = this.tail;
    let currentNode = this.head;

    while (currentNode){
      if (!this.head.next) {
        this.length--;
        this.head = null;
        this.tail = null;
        return removed;
      }
      if (!currentNode.next.next){
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return removed;
      }
      currentNode = currentNode.next;
    }
  }
  shift(){
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return removed;
  }
  unshift(val){
    let newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }
  get(index){
    if (!this.head) return undefined;
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    let i = 0;
    let currentNode = this.head;
    while (currentNode){
      if (i === index){
        return currentNode;
      }
      currentNode = currentNode.next;
      i++
    }
  }
  set(index, value){
    if (!this.get(index)) return false;
    let node = this.get(index);
    node.value = value;
    return true;
  }
  insert(index, value){
    if (!this.get(index)) return false;
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return newNode;
  }
  remove(index){
    if (!this.get(index)) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }
  reverse(){
    if (!this.head) return null;
    if (this.length === 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null; //only null for the tail, then set to node afterwards
    let counter = this.length; //needed, otherwise might lose inner nodes if while loop is set to node.next
    while(counter > 0){
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
      counter--;
    }
    return this;
  }
}

let link = new LinkedList;
link.push(1);
link.push(2);
link.push(3);
link.push(4);
// link.pop();
// link.shift()
// link.unshift(0);
// link.get(10);
// link.set(2, 10)
// link.insert(0, 10);
// link.remove(0)
// link.reverse()
console.log(link)