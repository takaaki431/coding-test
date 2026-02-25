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
  throw new Error("Not implemented.");
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0] ?? "";

console.log(longestSubstringWithoutRepeating(s));
