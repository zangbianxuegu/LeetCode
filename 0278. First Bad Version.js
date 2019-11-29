// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
  return n => {
    let l = 0;
    let r = n;
    while (l < r) {
      const m = ~~((l + r) / 2);
      if (!isBadVersion(m)) l = m + 1;
      else r = m;
    }
    return l;
  };
};
// Runtime: 52 ms, faster than 67.13% of JavaScript online submissions for First Bad Version.
// Memory Usage: 33.8 MB, less than 23.08% of JavaScript online submissions for First Bad Version.