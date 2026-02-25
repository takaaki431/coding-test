import * as fs from "fs";

function maxDistinct(S: string, k: number): number {
    const freq = new Map<string, number>();
  
    // first window
    for (let i = 0; i < k; i++) {
      const char = S[i];
      freq.set(char, (freq.get(char) ?? 0) + 1);
    }
  
    let maxCount = freq.size;
  
    // sliding window
    for (let right = k; right < S.length; right++) {
      const charToAdd = S[right];
      const charToRemove = S[right - k];
  
      // add
      freq.set(charToAdd, (freq.get(charToAdd) ?? 0) + 1);
  
      // remove
      freq.set(charToRemove, freq.get(charToRemove)! - 1);
      if (freq.get(charToRemove) === 0) {
        freq.delete(charToRemove);
      }
  
      maxCount = Math.max(maxCount, freq.size);
    }
  
    return maxCount;
  }

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0];
const k = Number(input[1]);

console.log(maxDistinct(s, k));
