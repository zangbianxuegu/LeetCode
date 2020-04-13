// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


// 1) 
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  let a = s.replace(/\W/g, "").toLowerCase()
  return (
    a ===
    a
      .split("")
      .reverse()
      .join("")
  )
}

// let s = "A man, a plan, a canal: Panama"
// let s = "race a car"
// console.log(isPalindrome(s))
