// Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:

// Input: "bcabc"
// Output: "abc"

// Example 2:

// Input: "cbacdcbc"
// Output: "acdb"


// 1)
// map 记录每个字母出现次数，stack 存储最终结果，has 记录 stack 中是否存在了某个字母。迭代。
// 如果某个字母小于已经存储的 stack 最后一位 x，且 x 还会再出现（map[x] > 0），弹出 x，has[x] 设为不存在；反复进行前面操作直到不符合条件。
// 向 stack 中添加 n，has[n] 设为存在。
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
  let stack = []
  let map = {}
  let has = {}
  for (let n of s) {
    if (!map[n]) {
      map[n] = 1
    } else {
      map[n]++
    }
  }
  for (let n of s) {
    map[n]--
    if (!has[n]) {
      while (n < stack[stack.length - 1] && map[stack[stack.length - 1]]) {
        has[stack.pop()] = 0
      }
      stack.push(n)
      has[n] = 1
    }
  }
  return stack.join('')
}
// Runtime: 68 ms, faster than 68.06% of JavaScript online submissions for Remove Duplicate Letters.
// Memory Usage: 36.5 MB, less than 100.00% of JavaScript online submissions for Remove Duplicate Letters.