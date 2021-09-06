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
  find(val){
    if (!this.root) return false;
    var current = this.root;
    while (current) {
      if (val === current.value) return true;
      if (val > current.value && current.right) {
        current = current.right;
      } else if (val < current.value && current.left) {
        current = current.left;
      } else {
        return false;
      }
    }
  }

  BFS(){
    if (!this.root) return [];

    var queue = [];
    var storage = [];

    var current = this.root;
    queue.push(current);
    while(queue.length){
      storage.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      queue.shift();
      current = queue[0];
    }
    return storage;
  }

  DFSPreorder(){
    var storage = [];
    function traversal(current){
      storage.push(current.value);
      if (current.left) {
        traversal(current.left);
      }
      if (current.right) {
        traversal(current.right)
      }
        return;
    }
    traversal(this.root);
    return storage;
  }

}

var tree = new BST;
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(9);
tree.insert(7);
tree.insert(14);
// console.log(tree.find(14))
console.log(tree.DFSPreorder())
// console.log(tree);