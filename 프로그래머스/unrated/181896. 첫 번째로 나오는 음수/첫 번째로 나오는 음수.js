function solution(num_list) {
  for (let el of num_list) {
    if (el < 0) {
      return num_list.indexOf(el);
    }
  }
  return -1;
}
