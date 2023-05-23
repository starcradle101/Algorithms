function solution(my_string) {
    return my_string.replace(/\D/g, "").split("").map(x => Number(x)).sort();
}

// 정규표현식을 사용하면 되지 않을까
// 숫자만 고른다 -> 정규표현식으로 확인
// replace를 통해서 문자들을 전부 공백으로 바꾸고 그대로 split해서 반환하자.