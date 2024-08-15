/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const originWord = s.toLowerCase();
  const originWordArr = originWord.split("");
  const filteredWord = originWordArr.filter(
    (word) =>
      (word.charCodeAt() > 96 && word.charCodeAt() < 123) ||
      (word.charCodeAt() > 47 && word.charCodeAt() < 58)
  ).join("");
  const reverseWord = originWordArr.filter(
    (word) =>
      (word.charCodeAt() > 96 && word.charCodeAt() < 123) ||
      (word.charCodeAt() > 47 && word.charCodeAt() < 58)
  ).reverse().join("");

  if (filteredWord === reverseWord) {
    return true;
  } else {
    return false;
  }
};