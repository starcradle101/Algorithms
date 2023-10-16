function solution(n)
{
    var answer = 0;
    return String(n).split('').reduce((acc, curr) => acc + Number(curr),0);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
}

// 문자열로 바꾸고 split 한 다음 reduce 한 결과를 보내기