function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx += 1) {
        switch(mode) {
            case 0:
                if (code[idx] == 1) {
                    mode = 1;
                } else {
                    if(idx % 2 === 0) ret += code[idx]
                }
                break;
            case 1:
                if(code [idx] == 1) {
                    mode = 0;
                } else {
                    if(idx % 2 === 1) ret += code[idx]
                }
                break;
        }
        
    }
    return (ret.length === 0 ? "EMPTY" : ret);
}

// code를 앞에서부터 읽으며...
// mode 0
    // 요소가 1이 아니면 idx가 짝수일 때에만 ret이 맨 뒤에 code[idx] 추가
    // 요소가 1이면 mode를 0에서 1로 바꾸기

// mode 1
    // 요소가 1이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx] 추가
    // 1이면 mode를 1에서 0으로

// mode의 기본값은 0
// return 하려는 ret가 빈 문자열이면 "EMPTY" 리턴