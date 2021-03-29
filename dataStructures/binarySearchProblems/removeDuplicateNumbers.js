function removeDuplicateNumbers(nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }
  console.log(hash)
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] > 1) {
      delete nums[i]
    }
  }
  return nums.filter((num) => num || num === 0)
}
