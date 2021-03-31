function whatFlavors(cost, money) {
  let hash = {}
  for (let i = 0; i < cost.length; i++) {
    let compliment = money - cost[i]
    if (hash[compliment]) {
      console.log(hash[compliment], i + 1)
    }
    hash[compliment] = i + 1
  }
}

function whatFlavors(cost, money) {
  const map = new Map()
  for (let i = 0; i < cost.length; i++) {
    var target = money - cost[i]
    if (map.has(target)) {
      console.log(map.get(target), i + 1)
      break
    }
    map.set(cost[i], i + 1)
  }
}
