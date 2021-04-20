function rotate(nums, k) {
  let i = 0
  while (k > i) {
    nums.push(nums.shift())
    i++
  }
  return nums
}

function rotate(nums, k) {
  let first = nums.slice(k)
  let second = nums.slice(0, k)
  return [...first, ...second]
}
