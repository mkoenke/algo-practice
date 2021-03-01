function twoStrings(s1, s2) {
  let longer
  let shorter
  if (s1.length >= s2.length) {
    longer = s1
    shorter = s2
  } else {
    longer = s2
    shorter = s1
  }
  let seen = {}
  let seen2 = {}
  for (let i = 0; i < longer.length; i++) {
    let char = longer[i]
    seen[char] = true
  }
  for (let i = 0; i < shorter.length; i++) {
    let char = shorter[i]
    seen2[char] = true
  }
  let included = false
  for (let key in seen) {
    if (seen[key] === seen2[key]) {
      included = true
    }
  }
  return included ? "YES" : "NO"
}

twoStrings("hello", "world")
twoStrings("hi", "world")
