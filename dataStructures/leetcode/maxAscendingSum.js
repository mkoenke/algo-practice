function maxAscendingSum(nums) {
  let maxSubSum = -Infinity
  let subSum = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i]
    if (nums[i] > nums[i - 1]) {
      subSum = subSum + nums[i]
      if (subSum > maxSubSum) maxSubSum = subSum
    }
    if (nums[i] <= nums[i - 1]) {
      subSum = nums[i]

      if (subSum > maxSubSum) maxSubSum = subSum
    }
  }
  return Math.max(maxSubSum, max)
}

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))
console.log(maxAscendingSum([5, 5, 6, 6, 6, 9, 1, 2]))
