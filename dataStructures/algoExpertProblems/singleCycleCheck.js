function hasSingleCycle(array) {
  // Write your code here.
  let numVisited = 0
  let currentIdx = 0
  while (numVisited < array.length) {
    if (numVisited > 0 && currentIdx === 0) return false
    numVisited++
    currentIdx = getNext(currentIdx, array)
  }
  return currentIdx === 0
}

function getNext(currentIdx, array) {
  const jump = array[currentIdx]
  const nextIdx = (currentIdx + jump) % array.length
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}
