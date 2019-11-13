// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

// Example 2:

// Input: "()[]{}"
// Output: true

// Example 3:

// Input: "(]"
// Output: false

// Example 4:

// Input: "([)]"
// Output: false

// Example 5:

// Input: "{[]}"
// Output: true


// 1) 栈
var isValid = function(s) {
  let stack = [];
  let map = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  s = s.split("");
  for (let c of s) {
    if (["{", "[", "("].indexOf(c) > -1) {
      stack.push(c);
    } else {
      if (c !== map[stack.pop()]) {
        return false;
      }
    }
  }  
  return stack.length === 0;
};
// Runtime: 52 ms, faster than 84.30% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 34.2 MB, less than 41.67% of JavaScript online submissions for Valid Parentheses.


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  s = s.split("");
  for (let c of s) {
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (c !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// Runtime: 56 ms, faster than 63.64% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 34.1 MB, less than 50.00% of JavaScript online submissions for Valid Parentheses.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var st = [];
  for (var l of s)
    if ((i = "({[]})".indexOf(l)) > -1)
      if (st[st.length - 1] + i === 5) {
        st.length--;
      } else {
        st.push(i);
      }
  return st.length === 0;
};
// Runtime: 60 ms
// Memory Usage: 35.3 MB
