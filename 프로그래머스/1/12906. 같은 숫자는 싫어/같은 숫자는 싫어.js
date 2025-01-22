function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
    }
    return answer;
}

// 이전 원소와 비교하면서 하기