/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let orderedNums = [...nums].sort((a, b) => a - b);
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (orderedNums[mid] === target) {
      return nums.indexOf(target);
    } else if (orderedNums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
