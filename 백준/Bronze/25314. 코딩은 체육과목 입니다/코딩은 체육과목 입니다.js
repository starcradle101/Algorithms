function solution(input) {
  const BASE_STORAGE = 'int';
  const DATA_PREFIX = 'long ';

  const PREFIX_REPEAT = Math.floor(input / 4);

  console.log(DATA_PREFIX.repeat(PREFIX_REPEAT).concat(BASE_STORAGE));
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  input = parseInt(line);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
