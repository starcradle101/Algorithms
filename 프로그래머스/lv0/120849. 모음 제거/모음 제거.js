function solution(my_string) {
   return my_string.replace(/[aeiou]/gi, "");
}

// 모음을 제거... 정규표현식으로 aeiou만? -> 이러면 문자열에서 가능
// 아니면 조건문을 풀로 돌려도 가능