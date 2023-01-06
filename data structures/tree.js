class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree { // BST
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined

      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return false
    if (this.root.value === val) return true
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (current.value > val) {
        current = current.left
      } else if (current.value < val) {
        current = current.right
      } else {
        return true;
      }
    }
    return false
  }

  bfs() {
    const queue = [];
    const visitedNodes = [];

    let shiftedNode = this.root;

    queue.push(shiftedNode);

    while (queue.length !== 0) {
      shiftedNode = queue.shift();
      visitedNodes.push(shiftedNode.value);
      if (shiftedNode.left) queue.push(shiftedNode.left)
      if (shiftedNode.right) queue.push(shiftedNode.right)
    }
    return visitedNodes
  }

  dfsPreOrder() {
    let visitedNodes = [];
    let current = this.root;

    const traverse = (node) => {
      visitedNodes.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return visitedNodes;
  }

  dfsPostOrder() {
    let visitedNode = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)

      visitedNode.push(node.value)
    }
    traverse(current)

    return visitedNode
  }
}
