/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
      return 0;
    };

  const lenArr = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lenArr[i] = Math.max(lenArr[i], lenArr[j] + 1);
      }
    }
  }

  return Math.max(...lenArr);
};