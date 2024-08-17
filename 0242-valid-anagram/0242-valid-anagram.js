/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sExeptT = s;
  let parsedT = t;

  for (let i = 0; i < t.length; i++) {
    if (sExeptT.includes(t[i])) {
      sExeptT = sExeptT.replace(t[i], "");
      parsedT = parsedT.replace(t[i], "")
    }
  }

  if (sExeptT.length === 0 && parsedT.length === 0) {
    return true;
  }

  return false;
};