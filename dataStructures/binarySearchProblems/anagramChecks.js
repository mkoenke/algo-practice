function anagramChecks(s0, s1) {
  let freqCount = {}
  for (let i = 0; i < s0.length; i++) {
    freqCount[s0[i]] = (freqCount[s0[i]] || 0) + 1
  }
  for (let i = 0; i < s1.length; i++) {
    freqCount[s1[i]] = (freqCount[s1[i]] || 0) - 1
  }
  for (let key in freqCount) {
    if (freqCount[key] !== 0) {
      return false
    }
  }
  // console.log(freqCount)
  return true
}
