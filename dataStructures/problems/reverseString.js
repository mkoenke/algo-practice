// function reverseString(str) {
//   if (str === '') return ''
//   return reverseString(str.substr(1)) + str.charAt(0)
// }
// reverseString('hello')

function reverse(string) {
  let reversed = ''
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed
  }
  console.log(reversed)
}
reverse('hello')

function loopBack(string) {
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i]
  }
  console.log(reversed)
}
loopBack('hello')

function builtIn(string) {
  let reversed = [...string].reverse().join('')
  console.log(reversed)
}
builtIn('hello')

/// closure example
function createMultiplier(x) {
  function mulitply(num) {
    return num * x
  }
  return mulitply
}

let doubleFn = createMultiplier(2)

let double = doubleFn(4)

console.log(double)
