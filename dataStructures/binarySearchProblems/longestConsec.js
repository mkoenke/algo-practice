function longestConsecutive(s) {
  let count = 1
  let maxCount = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (s[i + 1] === char) {
      count++
    } else {
      count = 1
    }
    if (count > maxCount) {
      maxCount = count
    }
  }
  return maxCount
}
