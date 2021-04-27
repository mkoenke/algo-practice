function removingParenthesis(s) {
  let stack = []
  let leftOver = []
  let lastChar
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
      lastChar = s[i]
    } else if (s[i] === ')' && lastChar === '(') {
      stack.pop()
      lastChar = stack[stack.length - 1]
    } else {
      leftOver.push(s[i])
    }
  }
  // console.log(stack, leftOver)
  return leftOver.length + stack.length
}
