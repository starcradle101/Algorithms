function solution(arr, queries) {
    const answer = [...arr];
    for (let query of queries) {
        const [i, j] = query;
        [answer[i], answer[j]] = [answer[j], answer[i]];
    }
    return answer;
}


// 각 query별로 array 값을 바꾼다!
// 쿼리 처리 이후 배열 결과 반환

