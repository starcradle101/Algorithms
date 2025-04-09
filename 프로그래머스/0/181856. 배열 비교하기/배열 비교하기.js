function solution(arr1, arr2) {
    
    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    const arr1Sum = arr1.reduce((acc, curr) => acc + curr, 0);
    const arr2Sum = arr2.reduce((acc, curr) => acc + curr, 0);
    
    if(arr1Sum === arr2Sum) {
        return 0;
    } else {
        return arr1Sum > arr2Sum ? 1 : -1;
    }
}

// 배열의 대소관계 비교하기
// 길이가 다르다면, 길이가 긴 쪽이 더 크다
// 길이가 같다면, 원소의 합이 더 큰 쪽이 크다.

// 조건1: 길이

// 조건2: 원소의 합

// 출력
// 1이 크다면 1, 2가 크다면 -1, 같다면 0