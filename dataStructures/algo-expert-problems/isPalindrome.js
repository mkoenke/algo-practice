function isPalindrome(string) {
  if (string.length === 1) {
    return true
  }
  let left = 0
  let right = string.length - 1
  while (left < right) {
    if (string[left] === string[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true
  }

  let left = 0
  let right = string.length - 1
  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
