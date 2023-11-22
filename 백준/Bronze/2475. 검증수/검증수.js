function solution(input) {
  let answer = 0;
  input.forEach(num => {
    answer += num ** 2;
  });
  answer %= 10;
  console.log(answer);
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
