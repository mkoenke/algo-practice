function tournamentWinner(competitions, results) {
  let hash = {}
  let gameWinner = ''
  let tournamentWinner = ''
  highestScore = 0
  for (let i = 0; i < competitions.length; i++) {
    let pairArray = competitions[i]
    if (results[i] === 0) {
      gameWinner = pairArray[1]
      hash[gameWinner] = (hash[gameWinner] || 0) + 3
    } else {
      gameWinner = pairArray[0]
      hash[gameWinner] = (hash[gameWinner] || 0) + 3
    }
  }
  for (let team in hash) {
    if (hash[team] > highestScore) {
      highestScore = hash[team]
      tournamentWinner = team
    }
  }

  return tournamentWinner
}

tournamentWinner(
  [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
  ],
  [0, 0, 1]
)

tournamentWinner(
  [
    ['HTML', 'Java'],
    ['Java', 'Python'],
    ['Python', 'HTML'],
  ],
  [0, 1, 1]
)
