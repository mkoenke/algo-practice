function highFreq(nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }
  let max = 0

  for (const key in hash) {
    if (hash[key] > max) {
      max = hash[key]
    }
  }
  return max
}
