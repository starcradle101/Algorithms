function solution(input) {
  const range = input[0];
  for (let i = 1; i <= range; i++) {
    console.log(`${input[i].slice(0, 1)}${input[i].slice(-1)}`);
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
