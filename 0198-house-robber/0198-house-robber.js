/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevAmount = 0;
  let twoPrevAmount = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentAmount = Math.max(prevAmount, twoPrevAmount + nums[i]);

    twoPrevAmount = prevAmount;
    prevAmount = currentAmount;
  }

  return prevAmount;
};
