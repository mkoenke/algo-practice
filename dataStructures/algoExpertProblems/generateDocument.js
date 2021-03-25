function generateDocument(characters, document) {
  if (!document.length) {
    return true
  }
  let hash = {}
  for (let i = 0; i < characters.length; i++) {
    let char = characters[i]
    hash[char] = (hash[char] || 0) + 1
  }
  for (let i = 0; i < document.length; i++) {
    let char = document[i]
    hash[char] = (hash[char] || 0) - 1
  }
  for (let char in hash) {
    if (hash[char] < 0) {
      return false
    }
  }
  return true
}
