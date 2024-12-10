function solution(my_str, n) {
  let answer = [];
  let sub_string = '';
    
  for (let i = 0; i < my_str.length; i += 1) {
    sub_string += my_str[i];

    if (sub_string.length === n || i === my_str.length - 1) {
      answer.push(sub_string);
      sub_string = '';
    }
  }
  return answer;
}