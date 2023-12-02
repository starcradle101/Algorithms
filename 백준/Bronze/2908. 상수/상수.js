function solution(input) {
  const first = parseInt(input[0].toString().split('').reverse().join(''), 10);
  const second = parseInt(input[1].toString().split('').reverse().join(''), 10);

  console.log(first > second ? first : second);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  list = input.split(' ').map(el => Number(el));

  solution(list);
  process.exit();
});
