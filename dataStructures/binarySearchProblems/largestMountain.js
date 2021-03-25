function largestMountain(n, lower, upper) {
  if (n > (upper - lower) * 2 + 1) return []
  const mountain = []
  let tempUpper = upper
  let decreasingLength = Math.min(n - 2, upper - lower)
  let increasingLength = n - decreasingLength
  for (let i = increasingLength - 1; i >= 0; i--) {
    mountain.unshift(tempUpper)
    tempUpper--
  }
  for (let i = 0; i < decreasingLength; i++) {
    upper = upper - 1
    mountain.push(upper)
  }

  return mountain
}

console.log(largestMountain(5, 2, 6))
