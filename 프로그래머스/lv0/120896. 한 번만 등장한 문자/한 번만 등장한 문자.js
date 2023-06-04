function solution(s) {
  let answer = [];
  const s_set = new Set(s);
  for (let el of s_set) {
    let count = 0;
    for (let el2 of s) {
      if (el2 === el) {
        count++;
      }
    }
    if (count === 1) {
      answer.push(el);
    }
  }
  return answer.sort().join('');
}