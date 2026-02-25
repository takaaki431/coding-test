# Coding Test Practice

This repository contains TypeScript algorithm practice problems focused on the Sliding Window and Hash Map patterns.
Each problem directory includes:

- `problem.md`: problem statement and notes
- `input.txt`: sample input
- `answer.ts`: TypeScript file (solution or scaffold)

## Directory Structure

```text
sliding-window/
  fixed-size/
    count-windows-with-at-least-one-vowel/
    count-windows-with-vowel/
    max-constant/
    max-distinct/
    max-sum-k-digits/
    maximum-distinct-characters-in-window/
    max-vowels/
  variable-size/
    longest-substring-k-distinct/
    longest-substring-without-repeating/
```

## Problems by Category

### Sliding Window - Fixed Size

- `count-windows-with-vowel`
  Pattern: Sliding Window
  Difficulty: Easy
  Time: O(n)
  Space: O(1)
- `count-windows-with-at-least-one-vowel`
  Pattern: Sliding Window
  Difficulty: Easy
  Time: O(n)
  Space: O(1)
- `max-constant`
  Pattern: Sliding Window
  Difficulty: Easy
  Time: O(n)
  Space: O(1)
- `max-distinct`
  Pattern: Sliding Window + Hash Map
  Difficulty: Easy
  Time: O(n)
  Space: O(k)
- `maximum-distinct-characters-in-window`
  Pattern: Sliding Window + Hash Map
  Difficulty: Easy
  Time: O(n)
  Space: O(min(n, charset))
- `max-sum-k-digits`
  Pattern: Sliding Window
  Difficulty: Easy
  Time: O(n)
  Space: O(1)
- `max-vowels`
  Pattern: Sliding Window
  Difficulty: Easy
  Time: O(n)
  Space: O(1)

### Sliding Window - Variable Size

- `longest-substring-without-repeating`
  Pattern: Sliding Window + Hash Map
  Difficulty: Medium
  Time: O(n)
  Space: O(min(n, charset))
- `longest-substring-k-distinct`
  Pattern: Sliding Window + Hash Map
  Difficulty: Medium
  Time: O(n)
  Space: O(k)

## Run a Solution

1. Move to the problem directory.
2. Run the TypeScript file with standard input.

```bash
cd sliding-window/fixed-size/max-vowels
npx ts-node answer.ts < input.txt
```

If `ts-node` is not available:

```bash
npm install -D ts-node typescript
```
