/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const red: 0[] = [];
  const white: 1[] = [];
  const blue: 2[] = [];

  for(const num of nums) {
    if (num === 0){
      red.push(num);
    } else if (num === 1){
      white.push(num);
    } else if (num === 2){
      blue.push(num);
    }
  }

  nums.length = 0;
  nums.push(...red, ...white, ...blue);
};