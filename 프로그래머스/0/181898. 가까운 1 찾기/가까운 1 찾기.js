function solution(arr, idx) {
    const indeces = [];
    for (let i = idx; i < arr.length; i += 1) {
        if (arr[i] === 1) indeces.push(i);
    }
    
    if (indeces.length === 0) {
        return -1;
    }
    
    return Math.min(...indeces);
}


// idx보다 크면서
// 배열의 값이 1인 가장 작은 인덱스

// idx보다 크다 -> 배열 순회를 idx부터 하면 된다.
// 만약 돌았을때 없다면 -1 반환