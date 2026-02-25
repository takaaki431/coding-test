import * as fs from "fs";
function countWindowsWithVowel(S: string, k: number): number {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let vowelCount = 0;
    let answer = 0;
  
    // first window
    for (let i = 0; i < k; i++) {
      if (vowels.has(S[i])) vowelCount++;
    }
  
    if (vowelCount > 0) answer++;
  
    // sliding window
    for (let right = k; right < S.length; right++) {
      // add right
      if (vowels.has(S[right])) vowelCount++;
  
      // remove left
      if (vowels.has(S[right - k])) vowelCount--;
  
      if (vowelCount > 0) answer++;
    }
  
    return answer;
  }

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0];
const k = Number(input[1]);

console.log(countWindowsWithVowel(s, k));
