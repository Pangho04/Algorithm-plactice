/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sExeptT = s;

  if(s.length !== t.length){
    return false;
  }

  for (let i = 0; i < t.length; i++) {
      sExeptT = sExeptT.replace(t[i], "");
  }

  if (sExeptT.length === 0) {
    return true;
  }

  return false;
};