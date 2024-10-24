
var WordDictionary = function () {
  this.words = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const wordLen = word.length;

  if (this.words.has(wordLen) && !this.words.get(wordLen).includes(word)) {
    this.words.set(wordLen, [...this.words.get(wordLen), word]);
  } else {
    this.words.set(wordLen, [word]);
  }

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const wordLen = word.length;

  console.log(this.words)

  if (!this.words.has(wordLen)) {
    return false;
  }

  if (word.includes(".")) {
    const pureWord = word.replaceAll(".", "");
    const dotIndexes = word.split("").map((spell, index) => {
      if (spell === ".") {
        return index;
      }
    })

    return this.words.get(wordLen).map((word) => {
      return word.split("").map((spell, index) => {
        if (!dotIndexes.includes(index)) {
          return spell
        }
      }).join("")
    }).includes(pureWord);
  } else {
    return this.words.get(wordLen).includes(word);
  }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */