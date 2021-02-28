// function jumpingOnClouds(c) {

//     return numJumps
// }
function countJumps(c) {
  let numJumps = 0
  if (!c.length) return
  for (let i = 0; i < c.length; i++) {
    if ((c[i] = 0)) {
      if (c[i + 2] !== 1) {
        numJumps++
      } else if (c[i + 1] !== 1) {
        numJumps++
      }
    }
  }
  countJumps(c.slice(1))
  return numJumps
}
