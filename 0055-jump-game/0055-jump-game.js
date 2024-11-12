/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

  return isReach(0, nums[0]);

  function isReach(index, range) {
    if (index + range >= nums.length - 1) {
      return true;
    } else if (index + range < nums.length - 1 && nums[index] === 0) {
      return false;
    }

    for (let i = 1; i <= range; i++) {
      const nextStep = isReach(index + i, nums[index + i]);

      if (nextStep) {
        return true;
      }
    }

    return false;
  }
};