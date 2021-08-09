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
}

let single = new linkedList;
single.push(1);
single.push(2);
single.push(3);
// single.pop()
// console.log(single.shift())
// console.log(single.unshift(0))
console.log(single.get(100))
// console.log(single)