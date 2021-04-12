function hasSingleCycle(array) {
  let numVisited = 0
  let currentIndex = 0

  while (numVisited < array.length) {
    if (numVisited > 0 && currentIndex === 0) return false
    numVisited++
    currentIndex = findNextIndex(currentIndex, array)
  }
  return currentIndex === 0
}

function findNextIndex(currentIndex, array) {
  const leap = array[currentIndex]
  const nextIndex = (currentIndex + leap) % array.length
  if (nextIndex >= 0) {
    return nextIndex
  } else {
    return nextIndex + array.length
  }
}
