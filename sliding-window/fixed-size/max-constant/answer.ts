import * as fs from "fs";

function maxConstant(S: string, k: number): number {
  
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    let maxCount = 0;
  
    // first window
    for (let i = 0; i < k; i++) {
      if (!vowels.has(S[i].toLowerCase())) {
        count++;
      }
    }
  
    maxCount = count;
  
    // sliding window
    for (let right = k; right < S.length; right++) {
      if (!vowels.has(S[right].toLowerCase())) count++;
      if (!vowels.has(S[right - k].toLowerCase())) count--;
  
      maxCount = Math.max(maxCount, count);
      if (maxCount === k) return k; // early stop
    }
  
    return maxCount;
  }

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0];
const k = Number(input[1]);

console.log(maxConstant(s, k));
