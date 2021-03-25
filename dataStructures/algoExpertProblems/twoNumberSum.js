function twoNumberSum(array, targetSum) {
  let hash = {}
  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    let compliment = targetSum - num
    if (compliment in hash) {
      return [num, compliment]
    } else {
      hash[num] = true
    }
  }
  return []
}

function twoNumberSum(array, targetSum) {
  const hash = {}
  for (const num of array) {
    const compliment = targetSum - num
    if (compliment in hash) {
      return [compliment, num]
    } else {
      hash[num] = true
    }
  }
  return []
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
