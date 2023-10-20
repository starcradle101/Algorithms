function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < signs.length; i++) {
        (signs[i] === true) ? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}

// 배열을 돌면서 signs[i] 가 양수라면 answer에 +absolutes[i]