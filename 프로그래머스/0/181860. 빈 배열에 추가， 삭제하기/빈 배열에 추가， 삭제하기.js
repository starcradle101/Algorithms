function solution(arr, flag) {
  let answer = [];
  flag.forEach((el, idx) => {
    if (el) {
      answer.push(...new Array(arr[idx] * 2).fill(arr[idx]));
    } else {
      answer = answer.slice(0, -arr[idx]);
    }
  });
  return answer;
}