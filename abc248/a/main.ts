import * as fs from "fs";

const S = fs.readFileSync("/dev/stdin", "utf8");

let ans = 45;
for (let i = 0; i < 9; i++) {
  ans -= +S[i];
}

console.log(ans);
