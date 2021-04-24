function longestAlliteration(words) {
  let count = 0
  let seen = {}
  let start = 0
  for (let i = 0; i < words.length; i++) {
    let char = words[i][0]

    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    count = Math.max(count, i - start + 1)
    seen[char] = i + 1
  }
  return count
}
