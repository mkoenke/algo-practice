var isValid = function (s) {
  let stack = []
  let unMatched = []
  let lastChar

  for (let i = 0; i < s.length; i++) {
    console.log('s[i]', s[i])
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
      lastChar = s[i]
    } else if (
      (s[i] === ')' && lastChar === '(') ||
      (s[i] === '}' && lastChar === '{') ||
      (s[i] === ']' && lastChar === '[')
    ) {
      stack.pop()
      lastChar = stack[stack.length - 1]
    } else {
      unMatched.push(s[i])
    }
  }
  return unMatched.length || stack.length ? false : true
}
