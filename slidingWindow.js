function maxSubArraySum(array, num) {
  let maxSum = 0
  let tempSum = 0
  if (array.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum = array[i]
  }
  tempSum = maxSum
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
