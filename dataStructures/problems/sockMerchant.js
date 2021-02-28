function sockMerchant(n, arr) {
  let count = 0
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] = hash[arr[i]] += 1
    } else {
      hash[arr[i]] = 1
    }
  }
  for (let key in hash) {
    if (hash[key] % 2) {
      count++
    }
  }
  let pairs = (arr.length - count) / 2
  return pairs
}

sockMerchant(8, [1, 1, 2, 3, 3, 4, 4, 5])
