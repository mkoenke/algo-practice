function indexWithEqualLeftAndRight(nums) {
  let leftSum = 0
  let rightSum = 0
  for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
    leftSum = leftSum + nums[i]
    rightSum = rightSum + nums[j]

    if (rightSum === leftSum && i === j) {
      return i
    }
  }
  return -1
}

console.log(indexWithEqualLeftAndRight([2, 3, 4, 0, 5, 2, 2]))
