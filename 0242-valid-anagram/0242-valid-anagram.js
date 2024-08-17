/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sExeptT = s;

  for (let i = 0; i < t.length; i++) {
    if (sExeptT.includes(t[i])) {
      sExeptT = sExeptT.replace(t[i], "");
    }
  }

  if (sExeptT === "") {
    return true;
  }

  return false;
};