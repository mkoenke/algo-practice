function firstNonRepeatingCharacter(string) {
  let freqCounter = {}

  for (let i = 0; i < string.length; i++) {
    freqCounter[string[i]] = (freqCounter[string[i]] || 0) + 1
  }

  for (let i = 0; i < string.length; i++) {
    if (freqCounter[string[i]] === 1) return i
  }
  return -1
}
