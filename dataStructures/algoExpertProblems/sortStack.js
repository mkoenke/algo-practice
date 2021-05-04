function sortStack(stack) {
  // Write your code here.
  if (!stack.length) return stack
  const top = stack.pop()
  sortStack(stack)
  insertInOrder(stack, top)
  return stack
}

function insertInOrder(stack, value) {
  if (!stack.length || stack[stack.length - 1] <= value) {
    stack.push(value)
    return
  }
  const top = stack.pop()
  insertInOrder(stack, value)
  stack.push(top)
}
