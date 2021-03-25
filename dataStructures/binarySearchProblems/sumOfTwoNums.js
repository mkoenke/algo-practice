function sumOfTwoNums(nums, k) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    const compliment = k - nums[i]
    if (hash[nums[i]]) {
      return true
    } else {
      hash[compliment] = true
    }
  }
  return false
}
