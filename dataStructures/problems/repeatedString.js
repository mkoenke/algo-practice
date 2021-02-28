function repeatedString(s, n) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++
    }
  }
  let numTimes = Math.floor(n / s.length)
  let leftOver = n % s.length
  let count2 = 0
  for (let i = 0; i < leftOver; i++) {
    if (s[i] === "a") {
      count2++
    }
  }
  return numTimes * count + count2
}
