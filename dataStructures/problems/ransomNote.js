function checkMagazine(magArray, noteArray) {
  let hash = {}

  for (let i = 0; i < magArray.length; i++) {
    if (hash[magArray[i]]) {
      hash[magArray[i]] = hash[magArray[i]] + 1
    } else {
      hash[magArray[i]] = 1
    }
  }

  for (let i = 0; i < noteArray.length; i++) {
    hash[noteArray[i]] = (hash[noteArray[i]] || 0) - 1
  }
  let allIncluded = false
  for (let key in hash) {
    if (hash[key] < 0) {
      break
    } else {
      allIncluded = true
    }
  }
  return allIncluded ? "Yes" : "No"
}

checkMagazine(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "one", "grand", "today"]
)
checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
)
