/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let chance = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    let index = i

    while (j < s.length) {

      if (s[index] !== s[j] && chance < k) {
        chance += 1;
      } else if (j === s.length - 1 || s[index] !== s[j] && chance === k ) {
      console.log(`s[${i}]: "${s[index]}", s[${j}]: "${s[j]}"`)
console.log(`maxLen: ${maxLen}, chance: ${chance}`);
        maxLen = Math.max(k !== 0 ? j - i + 1 : j - i, maxLen);
        chance = 0;
        j = 1;

        break;
      }

      j += 1;
      index += 1;
    }
  }

  return maxLen;
};