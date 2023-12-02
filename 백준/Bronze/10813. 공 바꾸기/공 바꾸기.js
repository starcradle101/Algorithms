function solution(input) {
  const sizeOfBaskets = input[0][0];
  const range = input[0][1];
  const changeArray = input.slice(1);

  let baskets = Array.from({ length: sizeOfBaskets }, (_, idx) => idx + 1);

  for (let i = 0; i < range; i += 1) {
    [baskets[changeArray[i][0] - 1], baskets[changeArray[i][1] - 1]] = [
      baskets[changeArray[i][1] - 1],
      baskets[changeArray[i][0] - 1],
    ];
  }
  const answer = baskets.join(' ');
  console.log(answer);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.forEach(val => {
    list.push(val.split(' ').map(el => parseInt(el)));
  });
  solution(list);
  process.exit();
});

// N개의 바구니, M번의 실행
// 1부터 n까지의 수로 채워진 배열 만들기
// range 동안 구조분해할당으로 배열 요소 바꿔치기
