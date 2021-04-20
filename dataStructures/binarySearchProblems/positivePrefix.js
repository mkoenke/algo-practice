function positivePrefix(nums) {
  let min = Infinity
  let sum = 0
  if (!nums.length) return 1
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < min) min = sum
  }
  return min < 0 ? Math.abs(min) + 1 : 1
}
