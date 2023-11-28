function solution(input) {
  const range = parseInt(input[0][0], 10);

  for (let i = 1; i <= range; i += 1) {
    const repeat = input[i][0];
    let answer = '';
    for (let char of input[i][1]) {
      answer += char.repeat(repeat);
    }
    console.log(answer);
  }
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
    list.push(val.split(' '));
  });
  solution(list);
  process.exit();
});
