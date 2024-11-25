function solution(age) {
    const age_code = ['a','b','c','d','e','f','g','h','i','j'];
    return [...String(age)].map((el) => age_code[el]).join('')
}