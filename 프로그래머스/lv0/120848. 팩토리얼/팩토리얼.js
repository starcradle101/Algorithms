function solution(n) {
  let i = 1;
  while (factorial(i) <= n) {
    i++;
  }
  let answer = i;
  return answer - 1;
}

function factorial(i) {
  if (i === 0 || i === 1) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
}