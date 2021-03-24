function recurringCharacter(s) {
  if (s.length < 2) return -1
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
    if (hash[s[i]] === 2) {
      return i
    }
  }
  return -1
}
