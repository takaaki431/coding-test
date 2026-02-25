import * as fs from "fs";

function maxSumKDigits(S: string, k: number): number {

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += Number(S[i]);
  }

  let maxSum = windowSum;

  for (let right = k; right < S.length; right++) {
    windowSum += Number(S[right]);
    windowSum -= Number(S[right - k]);
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const s = input[0];
const k = Number(input[1]);

console.log(maxSumKDigits(s, k));
