function solution(s) {
    if(s.length % 2 === 0) {
        const mid = Math.floor((s.length - 1) / 2);
        return s.slice(mid, mid + 2);
    } else {
        const mid = Math.floor((s.length - 1) / 2);
        return s[mid];
    }
}