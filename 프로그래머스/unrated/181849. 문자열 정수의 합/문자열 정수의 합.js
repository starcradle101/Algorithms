function solution(num_str) {
  return num_str.split('').reduce((acc, curr) => +acc + +curr);
}
