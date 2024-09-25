function wordBreak(s: string, wordDict: string[]): boolean {
  const memo = new Map<string, boolean>();
  return canBreak(s);

  function canBreak(str: string): boolean {
    if (memo.has(str)) {
      return memo.get(str)!;
    }

    if (str.length === 0) {
      return true;
    }

    for (const word of wordDict) {
      if (str.startsWith(word)) {
        const remainingStr = str.slice(word.length);
        if (canBreak(remainingStr)) {
          memo.set(str, true);
          return true;
        }
      }
    }

    memo.set(str, false);
    return false;
  }
};