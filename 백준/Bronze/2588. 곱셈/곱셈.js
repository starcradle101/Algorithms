function solution(input) {
  const first = input[0][0];
  const second = input[1][0];
  const secondStr = second.toString().split('');
  const secondDigit1 = +secondStr[2];
  const secondDigit2 = +secondStr[1];
  const secondDigit3 = +secondStr[0];

  console.log(
    `${first * secondDigit1}\n${first * secondDigit2}\n${
      first * secondDigit3
    }\n${first * second}`
  );
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
