import * as fs from "fs";

/**
 * Problem: Longest Substring With At Most K Distinct Characters
 * Pattern: Sliding Window + Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 *
 * Given a string S and an integer k, return the length of the longest
 * substring that contains at most k distinct characters.
 */
function longestSubstringAtMostKDistinct(S: string, k: number): number {
  if (k === 0) return 0;

  const freq = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < S.length; right++) {
    // add right
    freq.set(S[right], (freq.get(S[right]) ?? 0) + 1);

    // shrink window if invalid
    while (freq.size > k) {
      const leftChar = S[left];
      freq.set(leftChar, freq.get(leftChar)! - 1);

      if (freq.get(leftChar) === 0) {
        freq.delete(leftChar);
      }

      left++;
    }

    // update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0] ?? "";
const k = Number(input[1] ?? 0);

console.log(longestSubstringAtMostKDistinct(s, k));
