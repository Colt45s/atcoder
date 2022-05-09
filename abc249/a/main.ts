import * as fs from "fs";

const [A, B, C, D, E, F, X] = fs
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((v) => +v);

let t = 0;
let a = 0;
for (let i = 0; i < X; i++) {
  if (i % (A + C) < A) {
    t += B;
  }

  if (i % (D + F) < D) {
    a += E;
  }
}

if (t === a) {
  console.log("Draw");
} else if (t > a) {
  console.log("Takahashi");
} else {
  console.log("Aoki");
}
