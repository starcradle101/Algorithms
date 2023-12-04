function solution(input) {
  const standard = [1, 1, 2, 2, 2, 8];

  const answer = standard.map((_, idx) => standard[idx] - input[idx]).join(' ');

  console.log(answer);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  list = input.split(' ').map(el => Number(el));

  solution(list);
  process.exit();
});