function textEditor(s) {
  let returnString = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '<' && s[i + 1] === '-') {
      returnString.pop()
      i = i + 1
    } else {
      returnString.push(s[i])
    }
  }
  return returnString.join('')
}

console.log(textEditor('<-x<-z<-'))

console.log(textEditor('abc<-z'))
console.log(textEditor('<'))
