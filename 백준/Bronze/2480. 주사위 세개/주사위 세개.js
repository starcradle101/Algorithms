function solution(input) {
  const diceSet = {};
  for (let dice of input) {
    diceSet[dice] === undefined ? (diceSet[dice] = 1) : (diceSet[dice] += 1);
  }
  const diceSetSize = Object.keys(diceSet).length;
  const diceEyes = Object.keys(diceSet);
  let prize = 0;
  switch (diceSetSize) {
    case 1:
      prize = 10000 + diceEyes[0] * 1000;
      break;
    case 2:
      const sameEye = diceEyes.find(key => diceSet[key] === 2);
      prize = 1000 + sameEye * 100;
      break;
    case 3:
      prize = Math.max(...diceEyes) * 100;
      break;
  }
  console.log(prize);
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
