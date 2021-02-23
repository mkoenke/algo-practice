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
//exercise 3
function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let string1 = num1.toString()
  let string2 = num2.toString()
  if (string1.length !== string2.length) {
    return false
  }
  let freqCount1 = {}
  let freqCount2 = {}
  for (let digit of string1) {
    freqCount1[digit] = (freqCount1[digit] || 0) + 1
  }
  for (let digit of string2) {
    freqCount2[digit] = (freqCount2[digit] || 0) + 1
  }
  for (let key in freqCount1) {
    if (freqCount1[key] !== freqCount2[key]) {
      return false
    }
  }
  return true
}
//exercise 4 - frequency counter

function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}
