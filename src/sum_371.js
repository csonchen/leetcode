function add(a, b) {
  if (a == 0) return b
  if (b == 0) return a

  return add(a ^ b, (a & b) << 1)
}

console.log(add(1, 2))
console.log(add(11, -2))
console.log(add(-4, -2))