function naiveString(subString, string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== string[i + j]) {
        break
      }
      if (j === subString.length - 1) {
        count++
      }
    }
  }
  return count
}
