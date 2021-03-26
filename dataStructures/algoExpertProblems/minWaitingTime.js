function minimumWaitingTime(queries) {
  const sortedQ = queries.sort((a, b) => a - b)
  let totalTime = 0
  let currentWait = 0
  for (let i = 0; i < sortedQ.length - 1; i++) {
    let sum = sortedQ.slice(0, i).reduce((a, b) => {
      return a + b
    }, 0)

    totalTime = totalTime + sum + sortedQ[i]
  }
  return totalTime
}
