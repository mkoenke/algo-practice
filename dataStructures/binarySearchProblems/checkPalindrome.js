function checkPalindrome(s) {
  let isPalindrome = true
  for (let i = 0, j = s.length - 1; i < s.length, j >= 0; i++, j--) {
    if (s[i] !== s[j]) {
      isPalindrome = false
    }
  }
  return isPalindrome
}
