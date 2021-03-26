function branchSums(root) {
  const sums = []
  let runningTotal = 0
  recursiveBranchCalculator(root, runningTotal, sums)

  return sums
}

function recursiveBranchCalculator(node, runningTotal, sums) {
  if (!node) return

  const newRunningTotal = runningTotal + node.value
  if (!node.left && !node.right) {
    sums.push(newRunningTotal)
    return
  }

  recursiveBranchCalculator(node.left, newRunningTotal, sums)
  recursiveBranchCalculator(node.right, newRunningTotal, sums)
}
