function productSum(array, depth = 1) {
  if (!array.length) {
    return 0
  }
  // Write your code here.
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    if (!array[i].isArray) {
      sum += array[i]
    } else {
      sum + productSum(array, depth + 1)
    }
  }
  return sum * depth
}
