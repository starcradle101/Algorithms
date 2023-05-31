function solution(my_string) {
  return my_string
    .split(/[a-zA-z]/g)
    .filter((x) => x == Number(x))
    .reduce((acc, curr) => acc + Number(curr), 0);
}