// Sort a linked list using insertion sort.

// A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

// Algorithm of Insertion Sort:

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4

// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5


// 1) 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = (head) => {
  let remain = head
  let sorted = new ListNode(null)
  while (remain) {
    let cur = sorted
    let remainVal = remain.val
    while (cur && cur.next && cur.next.val <= remainVal) {
      cur = cur.next
    }
    let next = cur ? cur.next : cur
    cur.next = new ListNode(remainVal)
    cur.next.next = next
    remain = remain.next
  }
  return sorted ? sorted.next : sorted
}
// Runtime: 112 ms, faster than 43.82% of JavaScript online submissions for Insertion Sort List.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Insertion Sort List.

