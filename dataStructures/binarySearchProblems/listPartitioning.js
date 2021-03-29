function listPartitioning(strs) {
  let hash = {}
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === 'red') {
      hash[strs[i]] = (hash[strs[i]] || 0) + 1
    }
    if (strs[i] === 'green') {
      hash[strs[i]] = (hash[strs[i]] || 0) + 1
    }
    if (strs[i] === 'blue') {
      hash[strs[i]] = (hash[strs[i]] || 0) + 1
    }
  }
  let result = []
  for (let i = 0; i < hash['red']; i++) {
    result.push('red')
  }
  for (let i = 0; i < hash['green']; i++) {
    result.push('green')
  }
  for (let i = 0; i < hash['blue']; i++) {
    result.push('blue')
  }
  return result
}
