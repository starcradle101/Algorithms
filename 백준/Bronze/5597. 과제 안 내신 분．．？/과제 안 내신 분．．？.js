function solution(list) {
  const students = [].concat(...list);
  const check = Array.from({ length: 30 }, (_, index) => index + 1);

  let pass = check
    .filter(student => !students.includes(student))
    .sort((a, b) => a - b);

  for (let student of pass) {
    console.log(student);
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
    list.push(val.split(' ').map(el => parseInt(el)));
  });
  solution(list);
  process.exit();
});
