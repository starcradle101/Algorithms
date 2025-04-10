function solution(date1, date2) {
    const [date1_full, date2_full] = [date1.join(''), date2.join('')];
    
    return +date1_full < +date2_full ? 1 : 0;
}

