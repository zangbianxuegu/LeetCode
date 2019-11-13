// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let x = nums1.concat(nums2);
  x.sort(function(a, b) {
    return a - b;
  });
  let len = x.length;
  return len % 2 === 0
    ? (x[Math.floor(len / 2) - 1] + x[Math.ceil(len / 2)]) / 2
    : x[Math.floor(len / 2)];
}
// Runtime: 124 ms
// Memory Usage: 39.3 MB


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;

  if (m < n) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const half = (m + n + 1) >> 1;

  let low = 0;
  let high = n;
  while (low <= high) {
    const i = (low + high) >> 1;
    const j = half - i;

    if (i < n && nums1[i] < nums2[j - 1]) {
      low = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      high = i - 1;
    } else {
      const l1 = i === 0 ? -Infinity : nums1[i - 1];
      const l2 = j === 0 ? -Infinity : nums2[j - 1];
      const maxLeft = Math.max(l1, l2);

      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      const r1 = i === n ? Infinity : nums1[i];
      const r2 = j === m ? Infinity : nums2[j];
      const minRight = Math.min(r1, r2);

      return (maxLeft + minRight) / 2;
    }
  }
}
// Runtime: 104 ms
// Memory Usage: 39 MB