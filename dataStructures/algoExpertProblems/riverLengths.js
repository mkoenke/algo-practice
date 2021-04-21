function riverSizes(matrix) {
  // Write your code here.
  const riverSizes = []
  const visitedMatrix = matrix.map((row) => row.map((value) => false))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
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
    visitedMatrix[i][j] = true
    if (matrix[i][j] === 0) continue
    currentRiverSize++
    const unvisitedNeighbors = getUnvisited(i, j, matrix, visitedMatrix)
    // for  (let i = 0; i < unvisitedNeighbors.length; i++){
    // 	nodesToExplore.push(unvisitedNeighbors[i])
    // }
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor)
    }
  }
  if (currentRiverSize > 0) {
    riverSizes.push(currentRiverSize)
  }
}

function getUnvisited(i, j, matrix, visitedMatrix) {
  const unvisitedNeighbors = []
  if (i > 0 && !visitedMatrix[i - 1][j]) {
    unvisitedNeighbors.push([i - 1][j])
  }
  if (i < matrix.length - 1 && !visitedMatrix[i + 1][j]) {
    unvisitedNeighbors.push([i + 1][j])
  }
  if (j > 0 && !visitedMatrix[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1])
  }
  if (j < matrix[0].length - 1 && !visitedMatrix[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1])
  }
  return unvisitedNeighbors
}
