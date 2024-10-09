function findAnagrams(s: string, p: string): number[] {
  const pMap = new Map();

  for (const str of p) {
    pMap.set(str, (pMap.get(str) || 0) + 1);
  }

  const compareMap = new Map();
  let left = 0;
  let right = 0;
  let sameChars = 0;
  const result = [];

  while (right < s.length) {
    compareMap.set(s[right], (compareMap.get(s[right]) || 0) + 1);

    if(compareMap.get(s[right]) === pMap.get(s[right])){
      sameChars++;
    }

    if (right - left + 1 === p.length) {
      if(sameChars === pMap.size){
        result.push(left);
      }

      if(compareMap.get(s[left]) === pMap.get(s[left])){
        sameChars--;
      }

      compareMap.set(s[left], compareMap.get(s[left]) - 1);

      left++;
    }

    right++;
  }

  return result;
};