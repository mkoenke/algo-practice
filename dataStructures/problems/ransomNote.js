function checkMagazine(magArray, noteArray) {
  let hash = {}

  for (let i = 0; i < noteArray.length; i++) {
    let word = noteArray[i]
    hash[word] = (hash[word] || 0) + 1
  }

  for (let i = 0; i < magArray.length; i++) {
    let word = magArray[i]
    hash[word] = (hash[word] || 0) - 1
  }
  let included = true
  for (let key in hash) {
    if (hash[key] > 0) {
      included = false
    }
  }
  return included ? "Yes" : "No"
  //   let hash = {}

  //   for (let i = 0; i < magArray.length; i++) {
  //     if (hash[magArray[i]]) {
  //       hash[magArray[i]] = hash[magArray[i]] + 1
  //     } else {
  //       hash[magArray[i]] = 1
  //     }
  //   }

  //   for (let i = 0; i < noteArray.length; i++) {
  //     hash[noteArray[i]] = (hash[noteArray[i]] || 0) - 1
  //   }
  //   let allIncluded = false
  //   for (let key in hash) {
  //     if (hash[key] < 0) {
  //       break
  //     } else {
  //       allIncluded = true
  //     }
  //   }
  //   return allIncluded ? "Yes" : "No"

  //   let obj = {}
  //   for(let i = 0; i < noteArray.length; i++){
  //     console.log(obj)
  //     if(!obj[noteArray[i]]) obj[noteArray[i]] = 1
  //     else obj[noteArray[i]]++
  //   }
  //   for(let i = 0; i < magArray.length; i++){
  //     console.log(obj)
  //     if(obj[magArray[i]]) obj[magArray[i]]--
  //   }
  //   return Object.values(obj).includes(val => val > 0) ? "Yes" : "No"
}

checkMagazine(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "one", "grand", "today"]
)
checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
)
