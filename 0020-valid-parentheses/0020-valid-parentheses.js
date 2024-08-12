/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = {
    "(": ")",
    "[": "]",
    "{": "}",
  }

  let currentPair = [];

  if (!Object.hasOwn(pair, s[0]) || s.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(pair, s[i])) {
      currentPair.push(pair[s[i]]);

            if (i + 1 === s.length) {
        return false;
      }
    } else if (currentPair.pop() !== s[i]) {
      return false;
    }
  }

  if (currentPair.length > 0) {
    return false;
  }

  return true;
};