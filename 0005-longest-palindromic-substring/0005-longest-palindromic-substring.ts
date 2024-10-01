function longestPalindrome(s: string): string {
    function getPalindrome(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    }

    let longestPalindrome = "";

    for (let i = 0; i < s.length; i++) {
        let passOne = getPalindrome(i, i);
        let passTwo = getPalindrome(i, i + 1);

        if (passOne.length > longestPalindrome.length) {
            longestPalindrome = passOne
        }

        if (passTwo.length > longestPalindrome.length) {
            longestPalindrome = passTwo;
        }
    }

    return longestPalindrome;
};