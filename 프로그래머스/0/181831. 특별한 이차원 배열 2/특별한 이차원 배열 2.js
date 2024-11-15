function solution(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    
    return 1;
}

// 조건 문제

// n x n 크기
// arr이 다음을 만족하면 1 아니라면 0을 return