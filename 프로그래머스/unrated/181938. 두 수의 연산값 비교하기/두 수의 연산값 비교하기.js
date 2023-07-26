function solution(a, b) {
    let compute1 = Number(String(a) + String(b));
    let compute2 = 2 * a * b;
    return compute1 > compute2 ? compute1 : compute2;
}