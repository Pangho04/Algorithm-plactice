/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0 ) {
    return 0;
  }


  const numSet = new Set();
  let result = 1;

  for (const num of nums) {
    numSet.add(num);
  }

  const startNums = [];

  numSet.forEach((num) => {
    if (!numSet.has(num - 1)) {
      startNums.push(num);
    }
  })

  for (let i = 0; i < startNums.length; i++) {
    let newResult = 1;
    let nextNum = startNums[i] + 1;

    while (numSet.has(nextNum)) {
      newResult += 1;
      nextNum += 1;
    }

    if (newResult > result) {
      result = newResult;
    }
  }

  return result;
};