function majorityVote(nums) {
  const half = Math.floor(nums.length / 2)
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }
  for (const key in hash) {
    if (hash[key] > half) {
      return parseInt(key)
    }
  }
  return -1
}
