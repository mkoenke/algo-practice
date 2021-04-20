function isRotation(s0, s1) {
  if (s0.length !== s1.length) return false
  const double = s0 + s0
  const isContained = double.indexOf(s1)
  return isContained === -1 ? false : true
}
