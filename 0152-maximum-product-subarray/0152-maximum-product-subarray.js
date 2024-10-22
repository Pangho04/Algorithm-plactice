/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxNum = nums[0];
  let minNum = nums[0];
  let result = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const currentMax = Math.max(current, maxNum * current, minNum * current);

    minNum = Math.min(current, maxNum * current, minNum * current);
    maxNum = currentMax;

    result = Math.max(result, maxNum);
  }

  return result;
};