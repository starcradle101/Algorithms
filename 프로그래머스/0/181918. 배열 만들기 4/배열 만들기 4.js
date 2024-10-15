function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
        } else {
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
                i += 1;
            } else {
                stk.pop();
            }
        }
    }
    return stk;
}

// i가 aarr의 길이보다 작으면 다음 작업 반복
// stk가 빈 배열이라면, arr[i]를 추가하고 i + 1
// stk 원소 있고, arr[i]보다 stk의 마지막 원소가 크면 arr[i]를 stk의 뒤에 추가
// 원소가 있는데 반대로 작으면 stk의 마지막 원소를 stk에서 제거