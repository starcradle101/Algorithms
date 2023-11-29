function solution(input) {
  const A = input[0];
  const B = input[1];
  const C = input[2];

  const cal1 = (A + B) % C;
  const cal2 = ((A % C) + (B % C)) % C;
  const cal3 = (A * B) % C;
  const cal4 = ((A % C) * (B % C)) % C;

  console.log(`${cal1}\n${cal2}\n${cal3}\n${cal4}`);
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
