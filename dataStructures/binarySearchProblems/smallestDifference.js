function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let smallest = Infinity
  let current = Infinity
  let smallestPair = []

  while (i < arrayOne.length && j < arrayTwo.length) {
    let first = arrayOne[i]
    let second = arrayTwo[j]
    if (first < second) {
      current = second - first
      i++
    } else if (second < first) {
      current = first - second
      j++
    } else {
      return [first, second]
    }
    if (smallest > current) {
      smallest = current
      smallestPair = [first, second]
    }
  }
  return smallestPair
}
