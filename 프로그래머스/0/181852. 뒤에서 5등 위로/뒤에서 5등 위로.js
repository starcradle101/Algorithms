function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(5)
}

// 가장 작은 5개의 수를 제외한 수들을 오름차순
// slice 해서 가져오기