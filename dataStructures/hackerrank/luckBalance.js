function luckBalance(k, contests) {
  let importance = []
  let totalLuck = 0

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      totalLuck = totalLuck + contests[i][0]
    } else {
      importance.push(contests[i][0])
    }
  }

  let sorted = importance.sort((a, b) => b - a)

  for (let i = 0; i < sorted.length; i++) {
    if (i < k) {
      totalLuck = totalLuck + sorted[i]
    } else {
      totalLuck = totalLuck - sorted[i]
    }
  }

  return totalLuck
}
