/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const charCount = {};
  const oddNums = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!charCount[s[i]]) {
      charCount[s[i]] = 1;
    } else {
      charCount[s[i]]++;
    }
  }
  
  for (char in charCount) {
    if (charCount[char] % 2 === 0) {
      result += charCount[char];
    } else {
      oddNums.push(charCount[char]);
    }
  }

  return result + (Math.max(...oddNums) !== -Infinity ? Math.max(...oddNums) : 0);
};