use proconio::input;

fn main() {
    input! {
        n: usize,
        sts: [(String, String); n],
    }

    for i in 0..n {
        let mut a = true;
        let mut b = true;
        for (j, st) in sts.iter().enumerate() {
            if i == j {
                continue;
            }

            let (s1, t1) = &sts[i];
            let (s2, t2) = st;

            if s1 == s2 || s1 == t2 {
                a = false;
            }

            if t1 == s2 || t1 == t2 {
                b = false;
            }
        }

        if !a && !b {
            print!("No");
            return;
        }
    }

    print!("Yes")
}
