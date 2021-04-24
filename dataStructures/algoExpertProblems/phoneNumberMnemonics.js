const digitLetterHash = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

function phoneNumberMnemonics(phoneNumber) {
  const currentCombo = new Array(phoneNumber.length).fill('0')
  const allMnemonics = []
  recursiveMnemonicFinder(0, phoneNumber, currentCombo, allMnemonics)
  return allMnemonics
}

function recursiveMnemonicFinder(i, phoneNumber, currentCombo, allMnemonics) {
  if (i === phoneNumber.length) {
    const mnemonic = currentCombo.join('')
    allMnemonics.push(mnemonic)
  } else {
    const digit = phoneNumber[i]
    const lettersArray = digitLetterHash[digit]
    for (let j = 0; j < lettersArray.length; j++) {
      const letter = lettersArray[j]
      currentCombo[i] = letter
      recursiveMnemonicFinder(i + 1, phoneNumber, currentCombo, allMnemonics)
    }
  }
}
