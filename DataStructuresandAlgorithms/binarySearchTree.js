class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    console.log(this);
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode;
    }
    if (newNode.value < this.root.value) {
      if (this.root.left) {
        this.root.left.insert(value)
      } else {
        this.root.left = newNode;
      }
    } else if (newNode.value > this.root.value) {
      if (this.root.right) {
        this.root.right.insert(value);
      } else {
        this.root.right = newNode;
      }
    }
    return this;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(7);
console.log('this is the tree:', tree)