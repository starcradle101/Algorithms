const solution = (numbers, direction) => {
  if (direction === 'right') {
    let el = numbers.pop();
    numbers.unshift(el);
  } else {
    let el = numbers.shift();
    numbers.push(el);
  }
  return numbers;
};