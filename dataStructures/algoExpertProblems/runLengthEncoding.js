function runLengthEncoding(string) {
  let result = []
  let length = 1
  let currentChar = string[0]
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i] && length < 9) {
      length++
    } else {
      result.push(length)
      result.push(currentChar)
      currentChar = string[i]
      length = 1
    }
  }
  result.push(length)
  result.push(currentChar)
  return result.join('')
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
