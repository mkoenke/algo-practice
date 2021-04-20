function oneEditDistance(s0, s1) {
  if (s0 === s1) return true
  const length0 = s0.length
  const length1 = s1.length
  let count = 0

  if (Math.abs(length0 - length1) > 1) return false
  let i = 0 //0
  let j = 0 //1
  while (length0 > i && length1 > j) {
    if (s0[i] !== s1[j]) {
      if (count === 1) return false
      if (length0 < length1) {
        j++
      } else if (length1 < length0) {
        i++
      } else {
        i++
        j++
      }
      count++
    } else {
      i++
      j++
    }
  }
  if (i < length0 || j < length1) count++
  return count < 2
}
