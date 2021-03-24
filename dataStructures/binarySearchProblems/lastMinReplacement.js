function listMinReplacement(nums) {
  for (let i = nums.length - 1; i >= 2; i--) {
    nums[i] = Math.min(...nums.slice(0, nums[i]))
    console.log(nums[i])
  }
  nums[1] = nums[0]
  nums[0] = 0
  return nums
}

console.log(listMinReplacement([10, 5, 7, 9]))
console.log(listMinReplacement([1, 2, 0]))
console.log(Math.min(0, 1))
console.log(...[0, 1])
