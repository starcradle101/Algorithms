function solution(input) {
  let baskets = Array(input[0][0]).fill(0);
  const range = input[0][1];
  const balls = input.slice(1);

  for (let i = 0; i < range; i += 1) {
    const startBasket = balls[i][0] - 1;
    const endBasket = balls[i][1] - 1;
    const numberOfBall = balls[i][2];

    for (let j = startBasket; j <= endBasket; j += 1) {
      baskets[j] = numberOfBall;
    }
  }

  const answer = baskets.join(' ');
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
