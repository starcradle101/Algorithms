function solution(str_list, ex) {
    return str_list.filter(el => !el.includes(ex)).join('');
    // filter를 사용해서 풀어보자
    // !includes ex인 애들만 뽑아서 join하면 되겠다!
}