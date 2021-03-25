function mixedSorting(nums) {
  const positions = []
  const evens = []
  const odds = []
  const returnArray = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i])
      positions.push('e')
    } else {
      odds.push(nums[i])
      positions.push('o')
    }
  }
  const sortedEvens = evens.sort((a, b) => a - b)
  const sortedOdds = odds.sort((a, b) => b - a)
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === 'e') {
      returnArray.push(sortedEvens.shift())
    } else {
      returnArray.push(sortedOdds.shift())
    }
  }
  return returnArray
}
