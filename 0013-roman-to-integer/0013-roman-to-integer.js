/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const rome = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0;

  for (let i = 0; i < s.length; i++) {
      if (i - 1 >= 0 && rome[s[i - 1]] < rome[s[i]]) {
        result -= rome[s[i - 1]] * 2;
        result += rome[s[i]];
      } else {
        result += rome[s[i]];
      }
  }

  return result;
};
