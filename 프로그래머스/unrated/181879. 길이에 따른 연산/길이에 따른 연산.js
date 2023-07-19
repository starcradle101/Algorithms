function solution(num_list) {
  var answer = 0;
  if (num_list.length > 10) {
    for (let el of num_list) {
      answer += el;
    }
  } else {
    answer = 1;
    for (let el of num_list) {
      answer *= el;
    }
  }
  return answer;
}
