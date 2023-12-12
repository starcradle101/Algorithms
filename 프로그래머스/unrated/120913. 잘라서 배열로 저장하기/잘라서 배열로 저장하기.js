function solution(my_str, n) {
    var answer = [];
    for(let idx = 0; idx < my_str.length; idx += n) {
      if (my_str.length - (idx + 1) < n) {
        answer.push(my_str.slice(idx));
      }
      else {answer.push(my_str.slice(idx, idx + n))};
    }
  return answer;
}

