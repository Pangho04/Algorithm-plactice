/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function getCombination(currentTarget, currentNums, index) {
    if (currentTarget === 0) {
      result.push([...currentNums]);

      return;
    }

    if (currentTarget < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      currentNums.push(candidates[i]);

      getCombination(currentTarget - candidates[i], currentNums, i);

      currentNums.pop();
    }
  }

  getCombination(target, [], 0);

  return result;
};