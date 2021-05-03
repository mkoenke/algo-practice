class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateBst(tree) {
  // Write your code here.
  return validateBSTHelper(tree, -Infinity, Infinity)
}

function validateBSTHelper(tree, minValue, maxValue) {
  if (tree === null) return true
  if (tree.value < minValue || tree.value >= maxValue) return false
  const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value)
  return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue)
}
