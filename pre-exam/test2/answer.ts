import * as fs from "fs";

function solve(S: string): number {
    if (S.length === 0) return 0;
  
    let maxCount = 1;
    let count = 1;
    let lastChar = S[0];
  
    for (let i = 1; i < S.length; i++) {
      if (S[i] === lastChar) {
        count++;
      } else {
        count = 1;
        lastChar = S[i];
      }
  
      maxCount = Math.max(maxCount, count);
    }
  
    return maxCount;
  }
// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trimEnd().split("\n");
const s = input[0] ?? "";

console.log(solve(s));