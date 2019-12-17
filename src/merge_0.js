function merge0(nums) {
  var index = 0
  for (var i = 0, len = nums.length; i < len; i++) {
    var num = nums[i]
    if (num != 0) {
      nums[index++] = num
    }
  }
  
  // 补0
  for (var i = index, len = nums.length; i < len; i++) {
    nums[index++] = 0
  }
  console.log(nums)
}

merge0([0, 1, 0, 3, 12])
merge0([1, 2, 0, 0, 23, 23, 1, 2])