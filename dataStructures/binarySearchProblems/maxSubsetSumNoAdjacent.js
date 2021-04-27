const inputArray = [7, 10, 12, 7, 9, 14]

const maxSums = [7, 10, 19, 19, 28, 33]

maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + inputArray[i])

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0
  if (array.length === 1) return array[0]

  const maxSums = [...array]
  maxSums[1] = Math.max(maxSums[0], maxSums[1])

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
  }
  return maxSums[maxSums.length - 1]
}
