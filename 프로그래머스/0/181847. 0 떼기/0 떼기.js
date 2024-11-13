function solution(n_str) {
    let start_idx = 0;
    for (let i = 0; i < n_str.length; i += 1) {
        if (Number(n_str[i]) !== 0) {
            start_idx += i;
            break;
        }
    }
    
    return n_str.slice(start_idx);
}