// An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:

// If the character read is a letter, that letter is written onto the tape.
// If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
// Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

// Example 1:

// Input: S = "leet2code3", K = 10
// Output: "o"
// Explanation: 
// The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".

// Example 2:

// Input: S = "ha22", K = 5
// Output: "h"
// Explanation: 
// The decoded string is "hahahaha".  The 5th letter is "h".

// Example 3:

// Input: S = "a2345678999999999999999", K = 1
// Output: "a"
// Explanation: 
// The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".
 
// Note:

// 2 <= S.length <= 100
// S will only contain lowercase letters and digits 2 through 9.
// S starts with a letter.
// 1 <= K <= 10^9
// The decoded string is guaranteed to have less than 2^63 letters.


// 1)
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const decodeAtIndex = (S, K) => {
  let res = ''
  for (let i = 0; i < S.length; i++) {
    let s = S[i]
    if (String(parseInt(s)).length > 1) {
      res += s
    } else {
      let cur = res
      for (let j = 0; j < s - 1; j++) {
        res += cur
      }
    }
  }  
  return res[K - 1]
}


// 2)
// N：遍历编码字符串 S，获取大于 K 位置的解码长度
// i：遍历的次数，反向递减 i
// 如果 s = S[i] 是数字，那么 N / d 是重复的部分，K % N 是最终的字符
// 如果 s = S[i] 是字符，如果 K % N === 0，返回 s
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const decodeAtIndex = (S, K) => {
  let N = 0
  let i = 0
  for (; N < K; i++) {
    let s = S[i]
    if (String(Number(s)).length > 1) {
      N += 1
    } else {
      N *= Number(s)
    }
  }
  while (i--) {
    let s = S[i]
    if (String(Number(s)).length === 1) {
      N /= Number(s)
      K %= N
    } else if (K % N-- === 0) {
      return s
    }
  }
}
// Runtime: 52 ms, faster than 78.13% of JavaScript online submissions for Decoded String at Index.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Decoded String at Index.

