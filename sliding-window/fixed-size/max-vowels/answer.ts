import * as fs from "fs";

/**
 * Pattern: Fixed-Size Sliding Window
 *
 * Input:
 * abciiidef
 * 3
 *
 * Output:
 * 3
 */

function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;
  let maxCount = 0;

  // first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }
  maxCount = count;

  // slide window
  for (let right = k; right < s.length; right++) {
    if (vowels.has(s[right])) count++;
    if (vowels.has(s[right - k])) count--;

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

// ----------- Standard Input --------------

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0];
const k = Number(input[1]);

console.log(maxVowels(s, k));