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
}

let list = new DoublyLinkedList;
list.push(100);
list.push(10);
list.push('last item')
console.log(list.push('nevermind, this is the last one'))