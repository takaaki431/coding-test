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
  throw new Error("Not implemented.");
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0] ?? "";
const k = Number(input[1] ?? 0);

console.log(longestSubstringAtMostKDistinct(s, k));
