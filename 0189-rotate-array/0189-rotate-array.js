/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k < nums.length) {
    const afterK = nums.slice(nums.length - k);

    nums.splice(nums.length - k, k);
    nums.unshift(...afterK);
  } else {
    for (let i = 0; i < k; i++) {
      const endNum = nums.pop();

      nums.unshift(endNum);
    }
  }
};