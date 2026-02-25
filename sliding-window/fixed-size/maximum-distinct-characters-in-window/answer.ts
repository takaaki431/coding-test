import * as fs from "fs";

/**
 * Problem: Maximum Distinct Characters in Window (Fixed Size)
 * Pattern: Sliding Window + Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 *
 * Given a string S and an integer k, return the maximum number of
 * distinct characters found in any substring of length k.
 */
function maximumDistinctCharactersInWindow(S: string, k: number): number {
  throw new Error("Not implemented.");
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0] ?? "";
const k = Number(input[1] ?? 0);

console.log(maximumDistinctCharactersInWindow(s, k));
