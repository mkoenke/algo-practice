function maxMin(k, arr) {
  let minUnfairness = Infinity
  let sorted = arr.sort((a, b) => a - b)
  let left = 0
  let right = k - 1
  for (let i = 0; i < sorted.length - k + 1; i++) {
    let unfairness = sorted[right] - sorted[left]
    if (unfairness < minUnfairness) {
      minUnfairness = unfairness
    }
    left++
    right++
  }

  return minUnfairness
}
