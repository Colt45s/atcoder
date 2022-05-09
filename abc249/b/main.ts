import * as fs from "fs";

const S = fs.readFileSync("/dev/stdin", "utf8");

let isB = false;
let isS = false;
for (let i = 0; i < S.length; i++) {
  const target = S[i];
  if (/[A-Z]/.test(target)) {
    isB = true;
  }
  if (/[a-z]/.test(target)) {
    isS = true;
  }
}

const set = new Set(S.split(""));

if (isB && isS && set.size === S.length) {
  console.log("Yes");
} else {
  console.log("No");
}
