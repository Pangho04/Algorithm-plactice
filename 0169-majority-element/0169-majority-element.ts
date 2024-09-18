function majorityElement(nums: number[]): number {
  interface NumCount {
    num: number;
  }

  const numCount = {};
  const criteria = nums.length / 2;

  for (const num of nums) {
    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      numCount[num]++;
    }
  }


  for (const num in numCount) {
    if (numCount[num] > criteria) {
      return +num;
    }
  }
};