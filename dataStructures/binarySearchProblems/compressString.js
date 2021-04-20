function compressString(s) {
  const array = s.split('')
  let answer = '' + array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      answer = answer + array[i]
    }
  }
  return answer
}
