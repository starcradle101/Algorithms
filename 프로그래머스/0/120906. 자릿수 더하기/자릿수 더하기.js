function solution(n) {
    return [...String(n)].reduce((acc, curr) => acc + Number(curr), 0)
}