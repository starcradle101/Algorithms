function solution(num_list) {
    let [sum_odd, sum_even] = [0, 0];
    for (let i = 0; i < num_list.length; i += 1) {
        if (i % 2 === 0) {
            sum_odd += num_list[i];
        } else {
            sum_even += num_list[i];
        }
    }
    
    if (sum_odd === sum_even) {
        return sum_odd
    } else {
        return (sum_odd > sum_even) ? sum_odd : sum_even;
    }
}

// 가장 처음 1번 원소
// 홀수 번째 원소들의 합
// 짝수 번째 원소들의 합
// 두 값이 같다면 둘 중 아무나, 아니라면 큰 값