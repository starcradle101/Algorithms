function solution(arr) {
  let answer = arr;
  let answerLength = answer.length;
  const isPowerOfTwo = (n) => (n & (n - 1)) === 0;
  let count = 0;

  while (true) {
    if (isPowerOfTwo(answerLength)) {
      for (let i = 0; i < count; i += 1) {
        answer.push(0);
      }
      break;
    }
    answerLength += 1;
    count += 1;
  }

  return answer;
}
