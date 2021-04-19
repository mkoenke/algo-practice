function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b)

  let currentChange = 0

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentChange + 1) return currentChange + 1
    currentChange = currentChange + coins[i]
  }
  return currentChange + 1
}

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b)

  let currentChange = 0

  for (const coin of coins) {
    if (coin > currentChange + 1) return currentChange + 1
    currentChange = currentChange + coin
  }
  return currentChange + 1
}
