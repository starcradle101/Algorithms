function solution(input) {
  const gradeScale = {
    'A+': 4.5,
    A0: 4.0,
    'B+': 3.5,
    B0: 3.0,
    'C+': 2.5,
    C0: 2.0,
    'D+': 1.5,
    D0: 1.0,
    F: 0.0,
  };

  let sumOfGrade = 0;
  let sumOfCredit = 0;
  for (let idx = 0; idx < input.length; idx += 1) {
    if (gradeScale[input[idx][2]] === undefined) {
      continue;
    } else {
      sumOfGrade += parseInt(input[idx][1]) * gradeScale[input[idx][2]];
      sumOfCredit += parseInt(input[idx][1]);
    }
  }
  const GPA = sumOfGrade / sumOfCredit;
  console.log(GPA);
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
