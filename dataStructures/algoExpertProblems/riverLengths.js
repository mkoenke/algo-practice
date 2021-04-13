function riverSizes(matrix) {
  // Write your code here.
  const riverSizes = []
  const visitedMatrix = maptrix.map((row) => row.map((value) => false))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; i++) {
      if (visitedMatrix[i][j]) continue
      checkNeighbors(i, j, matrix, visitedMatrix, riverSizes)
    }
  }
  return riverSizes
}

function checkNeighbors(i, j, matrix, visitedMatrix, riverSizes) {
  let currentRiverSize = 0
  const nodesToExplore = [[i, j]]
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop()
    i = currentNode[0]
    j = currentNode[1]
    if (visitedMatrix[i][j]) continue
    vistedMatrix[i][j] = true
    if (matrix[i][j] === 0) continue
    currentRiverSize++
  }
}
