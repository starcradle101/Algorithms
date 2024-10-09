function solution(str1, str2) {
    const [str1Arr, str2Arr] = [[...str1], [...str2]];
    let answer = '';
    for (let i = 0; i < str1.length + str2.length; i += 1) {
        let whichArr = (i % 2 === 0 ? str1Arr : str2Arr);
        answer += whichArr.shift();
    }
    return answer;
}

// 문자열을 리턴
// 번갈아가면서

// 둘 다 배열로 변환
// str1+ str2의 길이만크 반복
// 홀수일때는 str1의 인덱스에서 꺼내가고
// 짝수일때는 str2의 인덱스에서 꺼내간다
// unshift