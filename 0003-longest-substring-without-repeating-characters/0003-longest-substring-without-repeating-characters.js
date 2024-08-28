/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const substrings = [];
  let i = 0;
  let subs = '';

  while (i < s.length) {
    if (!subs.includes(s[i])) {
      subs += s[i];

      if (i === s.length - 1) {
        substrings.push(subs.length);
      }

      i++;
    } else {
      substrings.push(subs.length);

      subs = '';
      i = substrings.length;
    }
  }

  return substrings.length ? Math.max(...substrings) : 0;
};