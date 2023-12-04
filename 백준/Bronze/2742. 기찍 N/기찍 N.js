function solution(input) {
  const range = input;
  answer = '';

  for (let i = range; i > 0; i -= 1) {
    answer += `${i}\n`;
  }

  console.log(answer.trim());
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
