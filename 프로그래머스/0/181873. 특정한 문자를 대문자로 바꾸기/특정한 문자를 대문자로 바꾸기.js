function solution(my_string, alp) {
    return my_string.split('').map((el) => (el === alp) ? el.toUpperCase() : el).join('')
}

// alp에 해당하는 글자를 모두 대문자로 바꿔서