// You are given a list of integers nums.
// Return the minimum positive value we can append to the beginning of nums such that prefix sums of the resulting list contains numbers that are all greater than 0.

function prefixSums(nums) {
  if (!nums.length) return 1
  const min = Math.min(...nums)
  // console.log("Min:", min)
  const valueToPos = Math.abs(min) + 1
  //    console.log("VTP: ", valueToPos)
  if (nums.length === 1 && nums[0] <= 0) return valueToPos
  if (nums.length === 1 && nums[0] > 0) return 1
  const index = nums.indexOf(min)
  let compliment
  for (let i = index; i >= 0; i--) {
    if (i === index && nums[i - 1]) {
      compliment = valueToPos - nums[i - 1]
      // console.log("Compliment:", compliment)
    } else if (i === index && index === 0) {
      compliment = valueToPos
      //  console.log("Compliment:", compliment)
    } else {
      if (nums[i - 1]) {
        compliment = compliment - nums[i - 1]
        //  console.log("Compliment:", compliment)
      }
    }
  }
  return compliment
}
