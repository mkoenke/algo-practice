function minimumBribes(q) {
  let numBribes = 0
  let chaotic = false

  for (let i = 0; i < q.length; i++) {
    if (q[i] - i - 1 > 2) {
      chaotic = true
    }

    for (let j = q[i] + 2; j > i; j--) {
      if (q[j] < q[i]) {
        numBribes++
      }
    }
  }
  if (chaotic) {
    console.log('Too chaotic')
  } else {
    console.log(numBribes)
  }
}

function minimumBribes(q) {
  let num = 0
  let chaotic = false
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaotic = true
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) num++
    }
  }
  if (chaotic) console.log('Too chaotic')
  else console.log(num)
}
