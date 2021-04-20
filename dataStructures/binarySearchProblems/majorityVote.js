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

function majorityVote(nums) {
  nums.sort((a, b) => a - b)
  const half = Math.floor(nums.length / 2)
  let count = 0
  let left = 0
  let right = 0
  if (nums.length === 1) return nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[left] === nums[right]) {
      count++
      right++
      if (count > half) return nums[i - 1]
    } else {
      if (count > half) return nums[i - 1]
      left = i
      count = 1
      right++
    }
  }
  return -1
}
