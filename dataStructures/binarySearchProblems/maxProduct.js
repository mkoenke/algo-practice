function maxProduct(nums) {
  let sortedNums = nums.sort((a, b) => a - b)

  let minProduct = sortedNums[0] * sortedNums[1]
  let maxProduct =
    sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]
  return minProduct > maxProduct ? minProduct : maxProduct
}
