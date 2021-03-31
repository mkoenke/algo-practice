function makeAnagram(a, b) {
  let hash = {}

  let count = 0
  for (let i = 0; i < a.length; i++) {
    let char = a[i]

    hash[char] = (hash[char] || 0) + 1
  }
  for (let i = 0; i < b.length; i++) {
    let char = b[i]

    hash[char] = (hash[char] || 0) - 1
  }
  for (let key in hash) {
    if (hash[key] !== 0) {
      count = count + Math.abs(hash[key])
    }
  }

  return count
}

makeAnagram("cde", "dcf")
makeAnagram("cde", "abc")
makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
