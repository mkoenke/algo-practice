function uniqueString(s) {
  const hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
  }
  for (let key in hash) {
    if (hash[key] > 1) return false
  }
  return true
}
