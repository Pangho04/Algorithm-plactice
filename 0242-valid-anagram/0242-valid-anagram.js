/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let chars = {}

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < t.length; i++) {
    chars[s[i]] = (chars[s[i]] || 0) + 1;
    chars[t[i]] = (chars[t[i]] || 0) - 1;
  }

  for (const char in chars) {
    if (chars[char] !== 0) {
      return false
    }
  }

  return true;
};