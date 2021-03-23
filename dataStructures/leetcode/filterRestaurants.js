var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let filteredRestaurants = []
  restaurants.forEach((restaurant) => {
    if (
      restaurant[2] === veganFriendly &&
      restaurant[3] <= maxPrice &&
      restaurant[4] <= maxDistance
    ) {
      filteredRestaurants.push(restaurant[0])
    }
  })
  return filteredRestaurants
}
// restaurant[2] === veganFriendly ? restaurant[3] <= maxPrice ? restaurant[4] <= maxDistance :

///0 = index
//1 = rating
//2 = veganFriendly
//3 = price
//4 = distance
