function solution(my_string) {
    return [...my_string].filter(el => Number(el) == el).map(Number).sort((a, b) => a - b);
}

// 정규식 사용해서 처리
// 혹은 형변환으로 처리
// 숫자만 뽑아내서 정렬 후 반환