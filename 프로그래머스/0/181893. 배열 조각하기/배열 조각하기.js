function solution(arr, query) {
    query.forEach((el, idx) => {
        (idx % 2 === 0) ? arr.splice(el + 1) : arr.splice(0, el);
    })
    return arr;
}

// 짝수 인덱스 -> arr에서 query[i]번인덱스를 제외하고
// 배열의 query[i] 번 인덱스 뒷부분을 잘라서 버린다

// 홀수 인덱스 -> arr에서 query[i]번 인덱스는 제외하고
// 배열의 query[i]번 인덱스 앞부분을 잘라서 버린다

// 작업을 마치고 남은 arr의 부분 배열은?