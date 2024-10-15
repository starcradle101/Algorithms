function solution(l, r) {
    let answer = [];
    for (let i = l; i <= r; i += 1) {
        const filtered_arr = String(i).split('').map(Number).filter((el) => el !== 5 && el !== 0);
        if (filtered_arr.length === 0) {
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1] : answer;
}

// 쪼갠다음
// 0도 아니고 5도 아니면 바로 continue / 아니라면 추가