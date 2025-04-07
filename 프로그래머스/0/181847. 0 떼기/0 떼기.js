function solution(n_str) {
    if(n_str[0] !== '0') return n_str;
    
    for (let i = 0; i < n_str.length; i += 1) {
        if(n_str[i] !== '0') return n_str.slice(i);
    }
}