function solution(num_list) {
    return (num_list.length >= 11) ? num_list.reduce((acc, curr) => acc + curr, 0) : num_list.reduce((acc, curr) => acc * curr, 1);
}

// 배열의 길이
// 11 이상이면 모든 원소의 합
// 10 이하이면 모든 원소의 곱