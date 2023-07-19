function solution(num_list) {
  let arrayProduct = num_list.reduce((acc, curr) => acc * curr);
  let arraySumProduct = num_list.reduce((acc, curr) => acc + curr) ** 2;

  return arrayProduct < arraySumProduct ? 1 : 0;
}
