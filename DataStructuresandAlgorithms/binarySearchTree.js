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
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true){
        if (value === current.value) return null;
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        } else if (value > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        }
      }
    }
  }
  find(value){
    if (!this.root) return false;
    let current = this.root;
    while (true){
      if (current.value === value) {
        return true;
      }
      if (value < current.value && current.left) {
        current = current.left;
      } else if (value > current.value && current.right) {
        current = current.right;
      } else {
        return false;
      }
    }
  }
  BFS(){
    let queue = [];
    let storage = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      storage.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return storage;
  }
  DFSPreorder(){
    let storage = [];
    function traverse(node){
      storage.push(node.value);
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return storage;
  }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(14);
tree.insert(7);
tree.insert(13);
tree.insert(15);
tree.insert(9);
console.log(tree.DFSPreorder());
// console.log('this is the tree:', tree)