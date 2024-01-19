function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1 + i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0] + nums[1] is 9
    
 */
