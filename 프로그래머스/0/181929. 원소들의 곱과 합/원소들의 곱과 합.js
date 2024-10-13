function solution(num_list) {
    const sum = num_list.reduce((acc, curr) => acc * curr, 1);
    const powered_sum = num_list.reduce((acc, curr) => acc + curr, 0) ** 2;
    
    return sum < powered_sum ? 1 : 0;
}


// 모든 원소들의 곱 < 모든 원소들의 합의 제곱 ? 1 : 0