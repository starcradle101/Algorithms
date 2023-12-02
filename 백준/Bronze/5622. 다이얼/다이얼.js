function solution(input) {
  const dial = {
    3: ['A', 'B', 'C'],
    4: ['D', 'E', 'F'],
    5: ['G', 'H', 'I'],
    6: ['J', 'K', 'L'],
    7: ['M', 'N', 'O'],
    8: ['P', 'Q', 'R', 'S'],
    9: ['T', 'U', 'V'],
    10: ['W', 'X', 'Y', 'Z'],
  };

  let answer = 0;

  for (let i = 0; i < input.length; i += 1) {
    const matchingKey = Object.keys(dial).find(key =>
      dial[key].includes(input[i])
    );
    Object.values(dial);
    answer += parseInt(matchingKey, 10);
  }
  console.log(answer);
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

