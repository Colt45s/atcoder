import * as fs from "fs";

const [N, M, K] = fs
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((v) => +v);

let dp = Array(N + 1)
  .fill(0)
  .map(() => Array(K + 1).fill(0));
dp[0][0] = 1;
const mod = 998244353;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let k = 1; k <= M; k++) {
      if (j + k <= K) {
        dp[i + 1][j + k] += dp[i][j] % mod;
      }
    }
  }
}

let ans = 0;
for (let i = 0; i <= K; i++) {
  ans = (ans + dp[N][i]) % mod;
}

console.log(ans);
