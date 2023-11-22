function solution(input) {
  const A = input[0];
  const B = input[1];
  console.log((A + B) * (A - B));
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
