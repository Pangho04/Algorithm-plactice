function subsets(nums: number[]): number[][] {
  const result: Set<number[]> = new Set();

  function getSubsets (subset, index) {
    result.add(subset);

    for (let i = index; i < nums.length; i++) {
      getSubsets([...subset, nums[i]], i + 1);
    }
  }

  getSubsets([], 0);

  return Array.from(result);
};