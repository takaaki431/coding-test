import * as fs from "fs";

function solve(S: string): string {
  const freq = new Map<string, number>();

  // 1) count frequency
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  // 2) find first non-repeating in original order
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    if (freq.get(ch) === 1) return ch;
  }

  return "None";
}

// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trimEnd().split("\n");
const s = input[0] ?? "";

console.log(solve(s));