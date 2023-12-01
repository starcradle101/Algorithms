function solution(input) {
  const RANGE = input[0][0];
  const TEST_CASES = input.slice(1);

  for (let i = 0; i < RANGE; i += 1) {
    console.log(
      `Case #${i + 1}: ${TEST_CASES[i][0]} + ${TEST_CASES[i][1]} = ${
        TEST_CASES[i][0] + TEST_CASES[i][1]
      }`
    );
  }
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
