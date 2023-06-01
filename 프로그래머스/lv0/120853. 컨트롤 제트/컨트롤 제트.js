function solution(s) {
  var answer = 0;
  let s_arr = s.split(' ');
  for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] === 'Z') {
      answer -= s_arr[i - 1];
    } else {
      answer += Number(s_arr[i]);
    }
  }
  return answer;
}