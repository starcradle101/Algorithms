function solution(my_string) {
    const my_arr = my_string.split(' ');
    let answer = Number(my_arr[0]);
    for (let i = 0; i < my_arr.length; i += 1) {
        switch(my_arr[i]) {
            case '+':
                answer += Number(my_arr[i + 1]);
                break;
            case '-':
                answer -= Number(my_arr[i + 1]);
                break;
        }
    }
    return answer;
}

// 이 문제를 풀기 위한 몇 가지 핵심 힌트를 드리겠습니다:

// 문자열을 공백(" ")을 기준으로 split하면 숫자와 연산자를 쉽게 분리할 수 있습니다.
// 예: "3 + 5" → ["3", "+", "5"]
// 이때 숫자는 문자열 형태이므로 Number()나 parseInt()를 사용해 숫자로 변환해야 합니다.
// split한 배열을 순회하면서:

// 숫자는 숫자로 변환하여 저장
// 연산자(+ 또는 -)를 만나면 다음 숫자와 현재까지의 결과를 계산


// 연산자가 나올 때마다 즉시 계산하는 방식으로 진행하면 됩니다.

// 이 힌트들을 바탕으로 한번 시도해보시겠어요? 더 구체적인 도움이 필요하시다면 말씀해 주세요!