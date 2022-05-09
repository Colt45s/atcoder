import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [first, ...S] = inputs;
const [N, K] = first.split(" ").map((v) => +v);

let ans = 0;

for (let bit = 0; bit < 1 << N; bit++) {
  const m = new Map<string, number>();
  for (let i = 0; i < N; i++) {
    if (bit & (1 << i)) {
      const t = S[i];
      for (let j = 0; j < t.length; j++) {
        const c = m.get(t[j]) || 0;
        m.set(t[j], c + 1);
      }
    }
  }

  let cnt = 0;
  m.forEach((v) => {
    if (v === K) {
      cnt++;
    }
  });

  ans = Math.max(ans, cnt);
}

console.log(ans);
