function solution(age) {
  let planetNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return age
    .toString()
    .split('')
    .map((x) => planetNames[x])
    .join('');
}
