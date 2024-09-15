/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const permutes = new Set();
  let usedNums = Array(nums.length).fill(false);

  function getPermutes(path) {
    if (permutes.has(`${path}`)) {
      return;
    }

    if (path.length === nums.length) {
      result.push([...path]);
      permutes.add(`${path}`);
      
      return;
    }

    for (let i = 0; i < nums.length; i ++){
      if (usedNums[i]) {
        continue;
      }

      path.push(nums[i]);

      usedNums[i] = true;

      getPermutes(path);

      path.pop();

      usedNums[i] = false;
    }
  }

  getPermutes([]);

  return result;
};