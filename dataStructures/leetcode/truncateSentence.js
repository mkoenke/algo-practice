function truncateSentence(s, k) {
  let answer = []
  let sArray = s.split(' ')
  for (let i = 0; i < k; i++) {
    answer.push(sArray[i])
  }
  return answer.join(' ')
}

function truncateSentence(s, k) {
  const sArray = s.split(' ')
  return sArray.slice(0, k).join(' ')
}
