function findClosestValueInBst(tree, target) {
  let currentNode = tree
  let closest = Infinity
  while (currentNode !== null) {
    if (Math.abs(target - currentNode.value) < Math.abs(closest - target)) {
      closest = currentNode.value
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break
    }
  }

  return closest
}

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
