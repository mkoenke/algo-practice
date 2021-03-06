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
  //   find(value){
  //     if(this.root === null) return false;
  //     var current = this.root,
  //         found = false;
  //     while(current && !found){
  //         if(value < current.value){
  //             current = current.left;
  //         } else if(value > current.value){
  //             current = current.right;
  //         } else {
  //             found = true;
  //         }
  //     }
  //     if(!found) return undefined;
  //     return current;
  // }
  // contains(value){
  //     if(this.root === null) return false;
  //     var current = this.root,
  //         found = false;
  //     while(current && !found){
  //         if(value < current.value){
  //             current = current.left;
  //         } else if(value > current.value){
  //             current = current.right;
  //         } else {
  //             return true;
  //         }
  //     }
  //     return false;
  // }
}
