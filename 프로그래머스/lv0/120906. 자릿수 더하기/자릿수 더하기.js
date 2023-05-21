function solution(n) {
  let answer = n
    .toString()
    .split('')
    .reduce((acc, curr) => Number(acc) + Number(curr), 0);
  return answer;
}