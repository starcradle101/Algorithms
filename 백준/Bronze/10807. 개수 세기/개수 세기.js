function solution(list) {
  const range = list[0][0];
  const givenArray = list[1];
  const standardNum = list[2][0];
  let answer = 0;

  for (let idx = 0; idx < range; idx++) {
    if (givenArray[idx] === standardNum) {
      answer += 1;
    }
  }

  console.log(answer);
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
