use itertools::Itertools;
use proconio::{input};

fn main() {
    input! {
        n: usize,
    }
    
    let mut ans = vec![1];
    for i in 1..n {
        let mut t = ans.clone();
        t.push(i + 1);
        t.extend(ans.into_iter());
        ans = t;
    }
    
    print!("{}", ans.iter().map(|i| i.to_string()).join(" "));
}
