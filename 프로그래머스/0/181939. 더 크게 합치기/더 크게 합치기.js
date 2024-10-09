function solution(a, b) {
    const [aCb, bCa] = [compute(a, b), compute(b, a)];
    return (aCb > bCa ? aCb: bCa);
}

function compute(a, b) { 
    return Number(a.toString() + b.toString());
}


// 문자열로 계산하는 계산방법
// 더 편하게 하려면 반환할때 Number로 바꿔서