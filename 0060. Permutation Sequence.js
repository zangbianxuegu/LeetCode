// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.

// Example 1:

// Input: n = 3, k = 3
// Output: "213"

// Example 2:

// Input: n = 4, k = 9
// Output: "2314"


// n = 4, k = 9, arr = [1, 2, 3, 4], res = []
// 1234, 1243, 1324, 1342, 1423, 1432
// 2134, 2143, 2314, 2341, 2413, 2431
// 3124, 3142, 3214, 3241, 3412, 3421
// 4123, 4132, 4213, 4231, 4312, 4321
// pos = (9 / 6) - 1 = 1
// res 添加 arr 中的第 pos（1） 位，即 2。
// k = 9 - 6 = 3, n-- = 3
// 接下来在 arr 剩余元素中查找
// 134, 143
// 314, 341
// 413, 431
// pos = (3 / 2) - 1 = 1
// res 添加 arr 中的第 pos（1） 位，即 3。
// k = 3 - 2 = 1, n-- = 2
// 接下来在 arr 剩余元素中查找
// 14
// 41
// pos = (1 / 1) - 1 = 0
// res 添加 arr 中的第 pos（0） 位，即 1。
// k = 1 - 1 = 0, n-- = 1
// 接下来在 arr 剩余元素中查找
// 4
// pos = (0 / 1) - 1 = -1
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let res = []
  const getFactorial = (n) => {
    if (n <= 1) {
      return 1
    }
    while (n > 1) {
      return n * getFactorial(n - 1)
    }
  }
  if (n >= 1 && n <= 9) {
    let arr = []
    let n2 = n
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }
    for (let i = 0; i < n2; i++) {
      let nfac = getFactorial(n - 1)
      let pos = Math.ceil(k / nfac) - 1
      res.push(arr.splice(pos, 1)[0])
      k -= pos * nfac
      n--
    }
  }
  return res.join('')
}
// Runtime: 48 ms, faster than 98.26% of JavaScript online submissions for Permutation Sequence.
// Memory Usage: 34 MB, less than 66.67% of JavaScript online submissions for Permutation Sequence.