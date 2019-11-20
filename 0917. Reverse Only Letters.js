// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"

// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 
// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "


// 1) queue
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let queue = []
  s = S.split('')
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)
    ) {
      queue.push(s[i]);
    }
  }  
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)
    ) {
      s[i] = queue.pop();
    }
  }
  return s.join('')
}
// Runtime: 64 ms, faster than 20.51% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 35.5 MB, less than 25.00% of JavaScript online submissions for Reverse Only Letters.