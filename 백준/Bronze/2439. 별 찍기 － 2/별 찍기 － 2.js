function solution(input) {
  for (let i = 1; i <= input; i += 1) {
    console.log(' '.repeat(input - i) + '*'.repeat(i));
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  input = parseInt(line);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
