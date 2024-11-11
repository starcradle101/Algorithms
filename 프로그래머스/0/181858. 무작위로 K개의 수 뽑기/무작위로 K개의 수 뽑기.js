function solution(arr, k) {
    let answer = [];
    const arrSet = new Set(arr);
    arrSet.forEach((el) => answer.push(el));
    
    if (answer.length < k) {
        for (let i = answer.length; i < k; i += 1) {
            answer.push(-1);
        }
    }
    
    if (answer.length > k) {
        return answer.slice(0, k);
    }
    
    return answer;
}

// 랜덤으로 서로 다른 k개의 수를 저장하는 배열
// 무작위 뽑기 후 지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가

// 그렇게해서 완성된 배열이 길이가 k보다 작으면 -1로 채우기