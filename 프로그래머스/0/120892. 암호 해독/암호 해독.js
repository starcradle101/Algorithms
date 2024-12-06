function solution(cipher, code) {
    return [...cipher].filter((_, idx) => idx % code === code - 1).join('');
}