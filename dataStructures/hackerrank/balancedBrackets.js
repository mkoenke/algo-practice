function balancedBrackets(s) {
  const stack = []
  const leftOver = []
  let lastChar = null

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      lastChar = s[i]
      stack.push(s[i])
    } else if (
      (s[i] === ')' && lastChar === '(') ||
      (s[i] === ']' && lastChar === '[') ||
      (s[i] === '}' && lastChar === '{')
    ) {
      stack.pop()
      lastChar = stack[stack.length - 1]
    } else {
      leftOver.push(s[i])
    }
  }
  return leftOver.length || stack.length ? 'NO' : 'YES'
}
