function needleInHaystack(haystack, needle) {
  return haystack.indexOf(needle)
}

function needleInHaystack(haystack, needle) {
  if (haystack === needle || !needle) {
    return 0
  }
  let start
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
    }
  }
}

function needleInHaystack(haystack, needle) {
  if (haystack === needle || !needle) {
    return 0
  }
  let length = 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      length++
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + 1] === needle[j]) {
          i = i + 1
          length++
        } else {
          length = 0
        }

        if (length === needle.length) {
          return i - length + 1
        }
      }
      if (length === needle.length) {
        return i - length + 1
      }
    }
  }
  return -1
}
