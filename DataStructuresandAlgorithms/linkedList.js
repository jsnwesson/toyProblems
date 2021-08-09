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
}

let single = new linkedList;
single.push(1);
single.push(2);
single.push(3);
single.pop()
console.log(single);