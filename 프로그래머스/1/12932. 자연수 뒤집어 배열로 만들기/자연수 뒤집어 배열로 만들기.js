function solution(n) {
    return String(n).split('').reverse().map((x) => Number(x));
}

// 어떤 자연수
// 뒤집어서 배열형태로 리턴해야 함
// 문자열로 만들고, split 한 다음, reverse 하고 배열을 