function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!
  let freqCount1 = {}
  let freqCount2 = {}
  if (string1.length !== string2.length) {
    return false
  }
  for (let char of string1) {
    if (!string1.includes(char)) {
      return false
    } else {
      freqCount1[char] = (freqCount1[char] || 0) + 1
    }
  }
  for (let char of string2) {
    if (!string2.includes(char)) {
      return false
    } else {
      freqCount2[char] = (freqCount2[char] || 0) + 1
    }
  }
  for (let key in freqCount1) {
    if (freqCount1[key] !== freqCount2[key]) {
      return false
    }
  }
  return true
}

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }
  const lookup = {}

  for (let char of string1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1)
  }
  for (let char of string2) {
    if (!lookup[char]) {
      return false
    } else {
      lookup[char] -= 1
    }
  }
  return true
}
