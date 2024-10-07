function letterCombinations(digits: string): string[] {
  if (digits.length <= 0) {
    return [];
  }

  const keyPads = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }
  const result = [];

  function getCombinations(index, char) {
    if (char.length === digits.length) {
      result.push(char);

      return;
    }
  
    for (const str of keyPads[digits[index]]) {
      getCombinations(index + 1, char + str);
    }
  }

  getCombinations(0, "");

  return result;
};