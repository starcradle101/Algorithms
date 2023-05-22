function solution(my_string) {
    return my_string.replace(/\D/g, '').split('').reduce((acc, curr) => acc + Number(curr), 0);
}