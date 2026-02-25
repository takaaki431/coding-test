# Fixed-Size Sliding Window

## 🧩 Problem

Given a string `S` and an integer `k`,  
return the maximum number of vowels in any substring of `S` with length `k`.

---

## 📌 Example

**Input**

S = "abciiidef"  
k = 3  

**Output**

3  

**Explanation**

The substring `"iii"` contains the maximum number of vowels (3).

---

## 🚀 Approach

This problem can be solved using a **Fixed-Size Sliding Window** technique.

1. Count the number of vowels in the first window of size `k`.
2. Slide the window to the right one character at a time.
3. Add the new character entering the window.
4. Remove the character leaving the window.
5. Track the maximum count.

---

## ⏱ Complexity

- Time Complexity: O(n)
- Space Complexity: O(1)