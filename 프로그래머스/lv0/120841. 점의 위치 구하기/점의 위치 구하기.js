function solution(dot) {
    const [x, y] = dot;
    if (x > 0) {
        if (y > 0) {
            return 1;
        } else {
            return 4;
        }
    }
    else {
        if (y > 0) {
            return 2;
        } else {
            return 3;
        }
    }
}



// dot의 x가 +일때
// 곱해서 양수 -> 1사
// 곱해서 음수 -> 4사

// dot의 x가 -일때
// 곱해서 양수 -> 3사
// 곱해서 음수 -> 2사
