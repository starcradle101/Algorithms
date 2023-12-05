function solution(input) {
  if (input.length % 2 === 0) {
    const left = input.slice(0, input.length / 2);
    const right = input.slice(input.length / 2);
    console.log(+(left.split('').reverse().join('') === right));
  } else {
    const left = input.slice(0, Math.floor(input.length / 2));
    const right = input.slice(Math.ceil(input.length / 2));
    console.log(+(left.split('').reverse().join('') === right));
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

  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
