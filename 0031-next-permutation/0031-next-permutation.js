/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const originNums = nums.join("");

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      nums.splice(i - 1, 2, nums[i], nums[i - 1])
      nums.sort((a, b) => {
        if (nums.indexOf(a) > i && nums.indexOf(b) > i) {
          return a - b;
        }
      })
    }
    break;
  }

  if (nums.join("") === originNums) {
    nums.sort((a, b) => a - b);
  }
};