function sumZero(array) {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

//exercise 4
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}

// exercise 5

function averagePair(array, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let avg = array[left] + array[right] / 2
    if (avg === num) {
      return true
    } else if (avg < num) {
      left++
    } else right--
  }
  return false
}

function isSubsequence(str1, str2) {
  var i = 0
  var j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}
