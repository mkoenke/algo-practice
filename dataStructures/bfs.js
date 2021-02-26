class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) {
      return false
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return true
        if (value < current.value) {
          if (!current.left) return false
          current = current.left
        } else if (value > current.value) {
          if (!current.right) return false
          current = current.right
        }
      }
    }
  }

  BFS() {
    // using bst code but works on any tree
    let data = []
    let queue = []
    let node = this.root
    queue.push(this.root)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
  DFSPreOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      data.push(node.value)
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(current)
    return data
  }
  DFSPostOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      data.push(node.value)
    }
    traverse(current)
    return data
  }
  DFSInOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      data.push(node.value)
      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(current)
    return data
  }
}
