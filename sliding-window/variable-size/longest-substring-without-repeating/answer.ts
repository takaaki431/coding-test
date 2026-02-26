import * as fs from "fs";

/**
 * Problem: Longest Substring Without Repeating Characters
 * Pattern: Sliding Window + Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 *
 * Given a string S, return the length of the longest substring
 * that contains no repeated characters.
 */
function longestSubstringWithoutRepeating(S: string): number {
  const last = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < S.length; right++) {
    const ch = S[right];

    if (last.has(ch) && last.get(ch)! >= left) {
      left = last.get(ch)! + 1;
    }

    last.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0] ?? "";

console.log(longestSubstringWithoutRepeating(s));
