function solution(arr) {
  let defaultArray = [...arr];
  let modifiedArray;
  let work = 0;

  while (true) {
    modifiedArray = defaultArray.map((el) => {
      if (el >= 50 && el % 2 === 0) return el / 2;
      if (el < 50 && el % 2 === 1) return el * 2 + 1;
      return el;
    });

    const check = isArraySame(defaultArray, modifiedArray);

    if (check) {
      break;
    } else {
      work += 1;
      defaultArray = modifiedArray;
    }
  }
    
    return work;
}

function isArraySame(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
