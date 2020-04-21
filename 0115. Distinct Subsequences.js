// Given a string S and a string T, count the number of distinct subsequences of S which equals T.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Example 1:

// Input: S = "rabbbit", T = "rabbit"
// Output: 3

// Explanation:

// As shown below, there are 3 ways you can generate "rabbit" from S.
// (The caret symbol ^ means the chosen letters)

// rabbbit
// ^^^^ ^^
// rabbbit
// ^^ ^^^^
// rabbbit
// ^^^ ^^^

// Example 2:

// Input: S = "babgbag", T = "bag"
// Output: 5

// Explanation:

// As shown below, there are 5 ways you can generate "bag" from S.
// (The caret symbol ^ means the chosen letters)

// babgbag
// ^^ ^
// babgbag
// ^^    ^
// babgbag
// ^    ^^
// babgbag
//   ^  ^^
// babgbag
//     ^^^

//       b a g
//     0 1 2 3
//   0 1 0 0 0
// b 1 1 1 0 0
// a 2 1 1 1 0
// b 3 1 2 1 0
// g 4 1 2 1 1
// b 5 1 3 1 1
// a 6 1 3 4 1
// g 7 1 3 4 5

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
  const sLen = s.length
  const tLen = t.length
  const dp = [...Array(tLen + 1)].map(() => Array(sLen + 1).fill(0))
  for (let j = 0; j < sLen; j++) {
    dp[0][j] = 1
  }
  for (let i = 0; i < tLen; i++) {
    for (let j = 0; j < sLen; j++) {
      if (t[i] === s[j]) {
        dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j]
      } else {
        dp[i + 1][j + 1] = dp[i + 1][j]
      }
    }
  }
  return dp[tLen][sLen]
}

// test case:
const s = 'babgbag'
const t = 'bag'
console.log(numDistinct(s, t))
