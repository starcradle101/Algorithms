function solution(myString) {
    return myString.split('x').map(char => char.length);
}

// split을 x로 한 다음
// 그 배열을 map으로 새로운 배열로 만들어서 이때 길이를 넣어주자.