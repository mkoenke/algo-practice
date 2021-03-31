function getMinimumCost(k, c) {
  let sortedPrices = c.sort((a, b) => b - a)
  let numBought = 0
  let total = 0

  for (let i = 0; i < sortedPrices.length; i++) {
    if (i % k === 0 && i > 0) {
      numBought++
    }

    total = total + (numBought + 1) * sortedPrices[i]
  }
  return total
}
