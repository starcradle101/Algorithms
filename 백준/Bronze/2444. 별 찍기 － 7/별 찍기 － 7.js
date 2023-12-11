function solution(input) {
  const range = input;
  for (let i = 1; i <= range; i += 1) {
    const spaces = ' '.repeat(range - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  for (let i = range - 1; i > 0; i--) {
    const spaces = ' '.repeat(range - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
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
