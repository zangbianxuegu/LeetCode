// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


// 未通过
// const mergeTwoLists = (l1, l2) => {
//   let l = [];
//   while (l1.length && l2.length) {
//     if (l1[0] < l2[0]) {
//       l.push(l1.shift());
//     } else {
//       l.push(l2.shift());
//     }
//   }
//   l = l.concat(l1).concat(l2);
//   return l;
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));