class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insert(value){
    var newNode = new Node (value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (current) {
      if (value === current.value) return null;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      }
    }
    return this;
  }
  find(value){

  }
}

var tree = new BST;
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(9);
tree.insert(7);
tree.insert(14);
console.log(tree);