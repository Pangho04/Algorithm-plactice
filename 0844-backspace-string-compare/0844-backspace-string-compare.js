/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return typingEditor(s) === typingEditor(t);
};

function typingEditor(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      result += str[i];
    } else {
      result = result.slice(0, -1);
    }
  }

  return result;
}