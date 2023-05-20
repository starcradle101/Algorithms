function solution(array) {
    array.sort((a,b) => a - b);
    return array[Math.floor(array.length / 2)]
}

// sort 시킨 후 배열의 중앙에 오는(길이 /2 