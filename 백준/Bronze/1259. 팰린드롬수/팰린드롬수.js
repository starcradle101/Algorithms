function solution(input) {
  let answer = '';
  const testCases = input.flat().slice(0, input.length - 1);
  const reverseCheck = testCases.map(number => {
    if (number.length % 2 === 0) {
      const left = number.slice(0, number.length / 2);
      const right = number.slice(number.length / 2, number.length);

      return [...left].reverse().join('') === right ? 'yes' : 'no';
    } else {
      const left = number.slice(0, Math.floor(number.length / 2));
      const right = number.slice(
        Math.floor(number.length / 2) + 1,
        number.length
      );

      return [...left].reverse().join('') === right ? 'yes' : 'no';
    }
  });

  for (let check of reverseCheck) {
    answer += `${check}\n`;
  }

  console.log(answer.trim());
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
