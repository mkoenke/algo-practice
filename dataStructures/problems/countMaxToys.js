function maximumToys(prices, k) {
  ///sort prices array from lowest to highest
  //iterate through and keep a running total until total exceeds k
  ///return number of items added into total
  let sortedPrices = prices.sort((a, b) => a - b)
  let total = 0
  for (let i = 0; i < sortedPrices.length; i++) {
    total = total + sortedPrices[i]
    if (total > k) {
      return i
    }
  }
}
