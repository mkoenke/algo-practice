function reverseWordsInString(string) {
  // Write your code here.
  let words = []
  let wordStart = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      let wordEnd = i
      let word = string.slice(wordStart, wordEnd)
      words.push(word)
      wordStart = i
    } else if (string[wordStart] === ' ') {
      words.push(' ')
      wordStart = i
    }
  }
  words.push(string.slice(wordStart))

  let start = 0
  let end = words.length - 1
  while (start < end) {
    let temp = words[start]
    words[start] = words[end]
    words[end] = temp
    console.log(words)
    start++
    end--
  }
  return words.join('')
}

console.log(reverseWordsInString('Hello my  name is Mary'))
