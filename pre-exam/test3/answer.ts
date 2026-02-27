import * as fs from "fs";

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
  
    const count = new Map<string, number>();
  
    // sのカウント
    for (const ch of s) {
      count.set(ch, (count.get(ch) ?? 0) + 1);
    }
  
    // tで減らす
    for (const ch of t) {
      if (!count.has(ch)) return false;
  
      count.set(ch, count.get(ch)! - 1);
  
      if (count.get(ch) === 0) {
        count.delete(ch);
      }
    }
  
    return count.size === 0;
  }
// ----------- Standard Input --------------
const input = fs.readFileSync(0, "utf8").trimEnd().split("\n");
const s = input[0].toLowerCase().replace(/[^a-z]/g, "") ?? "";
const t = input[1].toLowerCase().replace(/[^a-z]/g, "") ?? "";
console.log(isAnagram(s,t));