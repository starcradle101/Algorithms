function solution(date1, date2) {
    for (let i = 0; i < date1.length; i++) {
        if (date1[i] < date2[i]) {
            return 1;
        } else if (date1[i] === date2[i]) {
            if(i === date1.length - 1) {
                return 0;
            } else continue;
        } else {
            return 0;
        }
    }
}