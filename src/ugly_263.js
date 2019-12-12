function isUgly1(num, n) {
  if (num === 0) return false
  if (num < n) return false

  if (num === n) {
    return true
  }

  while(num % n === 0) {
    num = num / n
  }
  console.log(num === 1)
}

function isUgly2(num) {
  if (num <= 0) return false
  if (num === 1) return true

  let list = [2, 3, 5]

  for (var i of list) {
    if (num % i === 0) {
      return isUgly2(Math.floor(num / i))
    }
  }
  return false
}
 
// isUgly1(4, 2)
// isUgly1(5, 2)
console.log(isUgly2(14))
console.log(isUgly2(15))
console.log(isUgly2(8))