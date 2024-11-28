function solution(rsp) {
    return [...rsp].map(el => {
        switch(el) {
            case '2':
                return '0';
            case '0':
                return '5'
            case '5':
                return '2';
        }
    }).join('');
}

// 가위 2 바위 0 보 5
// 바위 0 보 5   가위 2