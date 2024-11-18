function solution(slice, n) {
    let answer = 1;
    while(slice * answer < n) {
        answer += 1;
    }
    return answer;
}

// 두 조각에서 열 조각까지 원하는 조각 수로 자르기
// slice와 n이 매개변수로 주어진다면
// n 명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지

// n명의 사람이 최소 한 조각 이상 피자를 먹는다?
// 아니, slice * answer(판) 의 수가 n보다 커지는 answer의 값으 ㄹ찾으면 된다