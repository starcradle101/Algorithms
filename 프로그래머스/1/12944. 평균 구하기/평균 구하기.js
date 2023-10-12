function solution(arr) {
    let answer = arr.reduce((acc, curr) => acc + curr) / arr.length;
    return answer;
}

// arr의 평균을 return 하는 함수, solution
// 배열을 전부 더해서 평균을 내는 것 -> reduce를 사용하자