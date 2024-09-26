function canPartition(nums: number[]): boolean {
  const total = nums.reduce((acc,init) => acc + init);
  const target = total / 2;

  if ( total % 2 !== 0) {
    return false;
  } else if (target < Math.max(...nums)) {
    return false;
  }

  const sumArr = Array(target + 1).fill(false);
  sumArr[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (sumArr[i - num]) {
        sumArr[i] = true;
      }
    }
  }

  return sumArr[target];
};