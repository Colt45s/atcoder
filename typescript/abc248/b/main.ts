import * as fs from "fs";

const [A, B, K] = fs
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((v) => +v);

let ans = 0;
let s = A;
while (true) {
  if (s >= B) {
    break;
  }
  s = s * K;
  ans++;
}

console.log(ans);
