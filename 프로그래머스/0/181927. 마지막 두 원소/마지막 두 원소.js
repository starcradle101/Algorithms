function solution(num_list) {
    const last = num_list.length - 1;
    return (num_list[last] > num_list[last - 1] ? [...num_list, (num_list[last] - num_list[last - 1])] : [...num_list, (num_list[last] * 2)]);
}

// 마지막 원소 > 그전 원소 ? 마지막 원소 - 그전 원소 : 마지막 원소 * 2