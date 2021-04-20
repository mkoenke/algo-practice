function parenthesesGrouping(s) {
  const array = []
  let count = 0
  let index = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') count++
    if (s[i] === ')') count--
    if (count === 0) {
      array.push(s.slice(index, i + 1))
      index = i + 1
    }
  }
  return array
}
