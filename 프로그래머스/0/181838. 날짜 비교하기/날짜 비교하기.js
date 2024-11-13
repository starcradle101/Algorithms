function solution(date1, date2) {
    const date1_num = Number(date1.join(''));
    const date2_num = Number(date2.join(''));
    
    return (date1_num < date2_num) ? 1 : 0;
}

// date1 > date2 ? 1 : 0

// 연도 비교

// 월 비교

// 일 비교

// 크면 클수록 뒤로 간다 (앞서지 않는 날짜)
// 앞서는 날짜 -> 비교했을때 작다!